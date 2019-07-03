import React, { Component } from 'react';

export default class ChatBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: props.currentUser,
            message: ''
        };
        this.showUser = this.showUser.bind(this);
        this.checkKeyPress = this.checkKeyPress.bind(this);
        this.newMessage = this.newMessage.bind(this);
    }

    showUser(event) {
        this.setState({ userName: event.target.defaultValue })
    }

    newMessage(event) {
        this.setState({ message: event.target.value })
    }

    checkKeyPress(event) {
        if (event.key === 'Enter') {
            const newMessage = {
                id: Math.floor(Math.random() * 999999 + 1),
                username: this.state.userName,
                content: this.state.message
            };
            this.setState({
                message: ''
            });
            this.props.sendMessage(newMessage);
        }
    }

    render() {
        return (
            <footer className="chatbar">
                <input className="chatbar-username" defaultValue={this.state.userName} placeholder="Who are you?" />
                <input className="chatbar-message" value={this.props.message} onChange={this.newMessage} onKeyPress={this.checkKeyPress} placeholder="What do you want to say?" />
            </footer>
        );
    }

}

