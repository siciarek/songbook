import React, { Component } from 'react';
import logo from './resources/images/logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React Hello!</h2>
      </div>
    );
  }
}

export default Header;
