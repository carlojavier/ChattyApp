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
          username: 'Bob',
          content: 'Has anyone seen my marbles?',
        },
        {
          username: 'Anonynomous',
          content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.'
        }
      ]
    }
  }
  render() {  
    return (
      <div>
        <NavBar />
        <MessageList />
        <ChatBar />
      </div>
    );
  }
}

export default App;
