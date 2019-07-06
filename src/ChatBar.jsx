import React, { Component } from 'react';

export default class ChatBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: postMessage,
            userName: 'Anonymous',
            message: '',
            notification: ''

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

    }

    postMessage(event) {
        let newMessage;
        const validateURL = new RegExp('(https:?//)?(www.)?.+.(png|jpe?g|gif)');
        if (event.key === 'Enter') {
            if (validateURL.test(this.state.message)) {
                newMessage = {
                    'id': this.state.id,
                    'type': 'postImage',
                    'username': this.state.userName,
                    'content': this.state.message
                };
            } else {
                newMessage = {
                    'id': this.state.id,
                    'type': 'postMessage',
                    'username': this.state.userName,
                    'content': this.state.message
                };
            }
            event.target.value = '',
                this.setState({
                    message: ''
                });
            this.props.sendMessage(newMessage);
        }
    }

    postNotification(event) {
        const notification = {
            'id': this.state.id,
            'oldusername': this.state.userName,
            'username': event.target.value,
            'type': 'postNotification'
        };
        this.props.postNotification(notification);
        this.setState({
            userName: event.target.value
        })
    }

    render() {
        return (
            <footer className="chatbar">
                <input className="chatbar-username" defaultValue={this.state.userName} onBlur={this.postNotification} placeholder="Who are you?" />
                <input className="chatbar-message" value={this.props.message} onChange={this.newMessage} onKeyPress={this.postMessage} placeholder="What do you want to say?" />
            </footer>
        );
    }

}

