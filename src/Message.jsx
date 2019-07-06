import React, { Component } from 'react';

function Message({ type, username, content, oldusername, colour }) {
    if (type === 'incomingMessage') {
    return (
        <div className="message">
            <span className="message-username" style={{ color: colour }}>{username}</span>
            <span className="message-content">{content}</span>
        </div>
        )
    } else if (type === 'incomingNotification') {
        return (
            <div className="notification">
                <span className='notificationContent'>*{oldusername} changed their name to {username}*</span>
            </div>

        );   
}
return null;

}

export default Message;