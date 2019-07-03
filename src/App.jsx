import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: {name: 'Bob'},
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
    }
    this.postNewMessage = this.postNewMessage.bind(this);
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
  }
  postNewMessage(message) {
    const addMessage = this.state.messages.concat(message);
    this.setState({messages: addMessage})
  }

  render() {  
    return (
      <div>
        <NavBar />
        <MessageList messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser} />
      </div>
    );
  }
}

export default App;
