import React, { Component } from 'react';

class ChatBar extends Component {
    render() {
        return (
            <footer className="chatbar">
                <input className="chatbar-username" placeholder={this.props.currentUser.name} />
                <input className="chatbar-message" placeholder="type your message here!" />
            </footer>
        );
    }

}



export default ChatBar;