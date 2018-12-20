import React, { Component } from 'react';
import Keyboard from '../Keyboard';
import KeyLog from '../KeyLog';
import ManualEntry from '../ManualEntry';
import './display.css';

const initKeyState = [
  { note: "C", hasSharp: true, active: false },
  { note: 'D', hasSharp: true, active: false },
  { note: 'E', hasSharp: false, active: false },
  { note: 'F', hasSharp: true, active: false },
  { note: 'G', hasSharp: true, active: false },
  { note: 'A', hasSharp: true, active: false },
  { note: 'B', hasSharp: false, active: false },
]

export default class Display extends Component {

  constructor(props) {
    super(props);
    this.addKeyToHistory = this.addKeyToHistory.bind(this); 
    this.addKeysToQueue = this.addKeysToQueue.bind(this);
    this.playQueue = this.playQueue.bind(this);
    this.playKey = this.playKey.bind(this);
    this.makeKeyActive = this.makeKeyActive.bind(this);
    this.resetKeys = this.resetKeys.bind(this);
    this.state = {
      keys: [
        { note: "C", hasSharp: true, active: false },
        { note: 'D', hasSharp: true, active: false },
        { note: 'E', hasSharp: false, active: false },
        { note: 'F', hasSharp: true, active: false },
        { note: 'G', hasSharp: true, active: false },
        { note: 'A', hasSharp: true, active: false },
        { note: 'B', hasSharp: false, active: false },
      ],
      keyHistory: [],
      keyQueue: [],
    }
  }

  addKeyToHistory(newKey) {
    this.setState(  {
      keyHistory: [...this.state.keyHistory, newKey]
    })
  }

  addKeysToQueue(keyString) {
    const parsedKeys = keyString.split(',').map(key => key.toUpperCase())
    this.setState({keyQueue: parsedKeys});
  }

  playQueue(){
    //null key added to clear keyboard after last key is played
    const queue = [...this.state.keyQueue, null]
    queue.forEach( (qk, index) => {
       setTimeout( () => this.makeKeyActive(qk), index * 1000);
      })
  }
  
  makeKeyActive(key) {
    let keys = this.state.keys.map(key => Object.assign({}, key));
    const updatedKeyState = keys.map((k) => {
      k.active = (k.note === key) ? true : false
      return k;
    })
    this.setState({ keys: updatedKeyState })
    this.addKeyToHistory(key);
  }

  resetKeys() {
    setTimeout( () => {
      this.setState({keys: initKeyState});
    }, 1000)
  }

  playKey(key) {
    this.makeKeyActive(key);
    this.resetKeys();
  } 

  render() {
    return (
      <main> 
        <Keyboard
          keys={this.state.keys} 
          keyPlayed={this.playKey}
          keyQueue={this.state.keyQueue}
        />
        <KeyLog keyHistory={this.state.keyHistory} />
        <ManualEntry playQueue={this.playQueue} updateKeyQueue={this.addKeysToQueue} keyQueue={this.state.keyQueue}/>
      </main>
    );
  }
}