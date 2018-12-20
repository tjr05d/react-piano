import React, { Component } from 'react';
import './keyLog.css';

export default class KeyLog extends Component {
  render() {
    return (
      <div className="KeyLogContainer"> 
        <h3> Key History: </h3>
        {this.props.keyHistory}
      </div>
    );
  }
}