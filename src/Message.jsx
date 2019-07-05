import React, { Component } from 'react';

function Message({ type, username, content }) {
    if (type === 'incomingMessage') {
    return (
        <div className="message">
            <span className="message-username">{username}</span>
            <span className="message-content">{content}</span>
        </div>
        )
    } else if (type === 'incomingNotification') {
        return (
            <div className="notification">
                <span className='notificationContent'>{username} changed their name to {username}</span>
            </div>

        );   
}
return null;

}

export default Message;