import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

// colours to access
const colours = [
  '#FF0000',
  '#0000FF',
  '#000080',
  '#FFA500',
  '#00FFD0',
  '#800080'
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: { name: '' },
      messages: [],
      clients: 0,
      colour: colours[Math.floor(Math.random() * 6)]
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.postNotification = this.postNotification.bind(this);
  }

  componentDidMount() {

    // Connect socket
    this.chattyServerLink = new WebSocket('ws://localhost:3001');
    this.setState({ chattyServer: this.chattyServerLink })
    this.chattyServerLink.onopen = (event) => {
    }
    this.chattyServerLink.onmessage = event => {
      const msg = JSON.parse(event.data);
      switch (msg.type) {
        case 'incomingMessage':
        case 'incomingNotification':
        case 'incomingImage':
          this.addMessages(msg);
          break;

        case 'clients':
          this.numberOfUsers(msg.numberOfUsers)
          break;
      }
    }
  }

  sendMessage(newMessage) {
    newMessage.colour = this.state.colour;
    this.chattyServerLink.send(JSON.stringify(newMessage));
  }

  addMessages(message) {
    const messages = this.state.messages.concat(message)
    this.setState({ messages: messages });
  }

  postNotification(newNotification) {
    this.chattyServerLink.send(JSON.stringify(newNotification));
  }

  numberOfUsers(clients) {
    this.setState({ clients: clients });
  }

  render() {
    return (
      <div>
        <NavBar numberOfUsers={this.state.clients} />
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser.name} sendMessage={this.sendMessage} postNotification={this.postNotification} />
      </div>
    );
  }
}

export default App;
