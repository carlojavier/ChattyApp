import React, { Component } from 'react';

function Message(props) {
    return (
        <div>
        <div className="message">
            <span className="message-username">{props.username}</span>
            <span className="message-content">{props.content}</span>
        </div>
         <div className="message system">
        </div>
        </div>
    );
}

export default Message;