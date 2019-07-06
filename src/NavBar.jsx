import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        console.log(this.props)
        return (
            <nav className="navbar">
                <a href="/" className="navbar-brand">Chatty</a>
                <span className="userCounter">Friends online: { this.props.numberOfUsers }</span>
            </nav>
        );
    }
}

export default NavBar;