import React, { Component } from 'react';
import Key from '../Key';
import './keyboard.css';

export default class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.keyPlayed = this.keyPlayed.bind(this);
  }

  keyPlayed(key) {
    this.props.keyPlayed(key);
  }

  render() {
    console.log("render: keyboard")
    return (
      <div className="KeyboardContainer">
        {this.props.keys.map(key => <Key key={key.note} note={key.note} active={key.active} hasSharp={key.hasSharp} keyPlayed={this.keyPlayed}/>)}
      </div>
    );
  }
}