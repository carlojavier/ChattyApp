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
    } else if (type === 'incomingImage') {
        return (
            <div className="notification">
                <span className='notificationContent'>*{username} sent a photo!*</span>
                <img src={content} className='userImages'></img>
            </div>

        );
    }
    return null;

}

export default Message;