import React, { Component } from 'react';
import Message from './Message.jsx';

function MessageList(props) {
    const messages = props.messages.map((message) => {
        return (
            <Message
                key={message.id}
                username={message.username}
                content={message.content} />
        );
    });
    return <main className="messages">{messages}</main>
}


export default MessageList;