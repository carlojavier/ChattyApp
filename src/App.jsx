import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: { name: '' },
      messages: []
    };
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(newMessage) {
    this.chattyServerLink.send(JSON.stringify(newMessage));
  }

  componentDidMount() {
    setTimeout(() => {
      // Add a new message to the list of messages in the data store
      const newMessage = {
        type: 'incomingNotification',
        content: `${this.state.currentUser} has joined the chat!`,
      }
      this.postNewMessage(newMessage)
    }, 1000);
    
    // Connect socket
    this.chattyServerLink = new WebSocket('ws://localhost:3001');
    this.setState({ chattyServer: this.chattyServerLink })
    this.chattyServerLink.onopen = (event) => {
    }
    this.chattyServerLink.onmessage = event => {
      const message = JSON.parse(event.data);
      const messages = this.state.messages.concat(message)
      this.setState({ messages: messages });
    }
  }
  render() {  
    return (
      <div>
        <NavBar />
        <MessageList messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser.name} sendMessage={this.sendMessage} />
      </div>
    );
  }
}

export default App;
