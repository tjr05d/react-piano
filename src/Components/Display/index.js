import React, { Component } from 'react';
import Keyboard from '../Keyboard';
import KeyLog from '../KeyLog';
import ManualEntry from '../ManualEntry';
import './display.css';

export default class Display extends Component {
  render() {
    return (
      <main> 
        <Keyboard />
        <KeyLog />
        <ManualEntry />
      </main>
    );
  }
}