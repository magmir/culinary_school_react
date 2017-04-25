import React, { Component } from 'react';
import Navigation from './containers/nav/nav';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}
