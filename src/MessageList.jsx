import React, { Component } from 'react';
import Message from './Message.jsx';

function MessageList(props) {
    const messages = props.messages.map((message) => {
        return (
            <Message
                type={message.type}
                key={message.id}
                username={message.username}
                oldusername={message.oldusername}
                content={message.content} />
        );
    });
    return <main className="messages">{messages}</main>
}


export default MessageList;