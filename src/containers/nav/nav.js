import React, { Component } from 'react';
import './nav.css';
import logo from '../../../img/logo.png';

export default class Navigation extends Component {
  render() {
    return (
      <div className="nav">
        <div><img className="logo" src={logo} alt="logo"/></div>
        <div className="nav-label">COURSES and PRICES</div>
        <div className="nav-label">TEACHERS</div>
        <div className="nav-label">CART</div>
      </div>
    )

  }
}
