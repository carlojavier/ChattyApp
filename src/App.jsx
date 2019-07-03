import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: {name: 'Nick'},
      messages: [
        {
          id: 1,
          username: 'Travis',
          content: 'Yo, you wanna buy some microgreens?',
        },
        {
          id: 2,
          username: 'Nima',
          content: 'Yeah sure man!'
        }
      ]
    };
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(newMessage) {
    const messages = this.state.messages.concat(newMessage)
    this.setState({ currentUser: {name: newMessage.username}, messages: messages } )
    this.chattyServerLink.send(JSON.stringify(newMessage));
    console.log(newMessage)
  }

  componentDidMount() {
    console.log('componentDidMount <App />');
    setTimeout(() => {
      console.log('Simulating incoming message');
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: 'Carlo', content: 'Hey... I need help'};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
    // Connect SOCKET
    this.chattyServerLink = new WebSocket('ws://localhost:3001');
    this.setState({ chattyServer: chattyServerLink })
    this.chattyServerLink.onopen = (event) => {
      console.log('connected to server');
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
