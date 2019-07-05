import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <a href="/" className="navbar-brand">Chatty</a>
                <span className="users-counter">Friends online:{ this.props.clients }</span>
            </nav>
        );
    }
}

export default NavBar;