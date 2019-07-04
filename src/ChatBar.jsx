import React, { Component } from 'react';

export default class ChatBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: postMessage,
            userName: '',
            message: '',

        };
        this.showUser = this.showUser.bind(this);
        this.checkKeyPress = this.checkKeyPress.bind(this);
        this.newMessage = this.newMessage.bind(this);
        this.changeUserName = this.changeUserName.bind(this);

    }

    showUser(event) {
        this.setState({ userName: event.target.defaultValue })
    }

    newMessage(event) {
        this.setState({ message: event.target.value })
    }

    changeUserName(event) {
        this.setState({
            userName: event.target.value
        })
    }

    checkKeyPress(event) {
        if (event.key === 'Enter') {
            if (this.state.message.length < 1) {
                return;
            }
            const newMessage = {
                'type': 'incomingMessage',
                'username': this.state.userName,
                'content': this.state.message
            }

            this.setState({
                message: ''
            });
            this.props.sendMessage(newMessage);
        }
    }

    render() {
        return (
            <footer className="chatbar">
                <input className="chatbar-username" defaultValue={this.state.userName} onChange={this.changeUserName} placeholder="Who are you?" />
                <input className="chatbar-message" value={this.props.message} onChange={this.newMessage} onKeyPress={this.checkKeyPress} placeholder="What do you want to say?" />
            </footer>
        );
    }

}

