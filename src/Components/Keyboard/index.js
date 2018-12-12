import React, { Component } from 'react';
import Key from '../Key';
import './keyboard.css';

export default class Keyboard extends Component {
  render() {
    const keys = [
      { note: 'C', hasSharp: true },
      { note: 'D', hasSharp: true },
      { note: 'E', hasSharp: false },
      { note: 'F', hasSharp: true },
      { note: 'G', hasSharp: true },
      { note: 'A', hasSharp: true },
      { note: 'B', hasSharp: false },
    ]
    return (
      <div className="KeyboardContainer">
        {keys.map( key => <Key note={key.note} hasSharp={key.hasSharp} />)}
      </div>
    );
  }
}