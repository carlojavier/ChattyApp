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
        this.newMessage = this.newMessage.bind(this);
        this.changeUserName = this.changeUserName.bind(this);
        this.postMessage = this.postMessage.bind(this);
        this.postNotification = this.postNotification.bind(this);

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

    postMessage(event) {
        if (event.key === 'Enter') {
            const newMessage = {
                'id': this.state.id,
                'type': 'postMessage',
                'username': this.state.userName,
                'content': this.state.message
            };
            event.target.value = '',
            this.setState({
                message: ''
            });
            this.props.sendMessage(newMessage);
        }
    }

    postNotification(event) {
        if (event.key === 'Enter') {
            const notification = {
                'id': this.state.id,
                'username': this.state.userName,
                'type': 'postNotification'
            };
            this.props.postNotification(notification);
        }
    }

    render() {
        return (
            <footer className="chatbar">
                <input className="chatbar-username" defaultValue={this.state.userName} onChange={this.changeUserName} onKeyPress={this.postNotification} placeholder="Who are you?" />
                <input className="chatbar-message" value={this.props.message} onChange={this.newMessage} onKeyPress={this.postMessage} placeholder="What do you want to say?" />
            </footer>
        );
    }

}

