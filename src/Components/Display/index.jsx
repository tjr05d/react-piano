import React, { Component } from 'react';
import Keyboard from '../Keyboard';
import KeyLog from '../KeyLog';
import ManualEntry from '../ManualEntry';
import './display.css';

const INIT_KEY_STATE = [
  { note: 'C', hasSharp: true, active: false },
  { note: 'D', hasSharp: true, active: false },
  { note: 'E', hasSharp: false, active: false },
  { note: 'F', hasSharp: true, active: false },
  { note: 'G', hasSharp: true, active: false },
  { note: 'A', hasSharp: true, active: false },
  { note: 'B', hasSharp: false, active: false },
];

export default class Display extends Component {
  constructor(props) {
    super(props);
    this.addKeyToHistory = this.addKeyToHistory.bind(this);
    this.addKeysToQueue = this.addKeysToQueue.bind(this);
    this.playQueue = this.playQueue.bind(this);
    this.playKey = this.playKey.bind(this);
    this.makeKeyActive = this.makeKeyActive.bind(this);
    this.resetKeys = this.resetKeys.bind(this);
    this.clearHistory = this.clearHistory.bind(this);
    this.updateKeySpeed = this.updateKeySpeed.bind(this);
    this.state = {
      keys: INIT_KEY_STATE.map(key => ({ ...key })),
      keyHistory: [],
      keyQueue: [],
      keySpeed: 5,
    };
  }

  // Keyboard functions
  makeKeyActive(key) {
    const { keys } = this.state;
    const keyCopy = keys.map(k => ({ ...k }));
    const updatedKeyState = keyCopy.map((k) => {
      const updateKey = k;
      updateKey.active = (k.note === key);
      return updateKey;
    });

    this.setState({ keys: updatedKeyState });
    this.addKeyToHistory(key);
  }

  resetKeys() {
    const { keySpeed } = this.state;
    setTimeout(() => {
      this.setState({ keys: INIT_KEY_STATE });
    }, keySpeed * 100);
  }

  playKey(key) {
    this.makeKeyActive(key);
    this.resetKeys();
  }

  // KeyLog functions
  addKeyToHistory(newKey) {
    const { keyHistory } = this.state;
    this.setState({
      keyHistory: [...keyHistory, newKey],
    });
  }

  clearHistory() {
    this.setState({ keyHistory: [] });
  }

  // ManaulEntry functions
  addKeysToQueue(parsedKeys) {
    this.setState({ keyQueue: parsedKeys });
  }

  updateKeySpeed(value) {
    this.setState({ keySpeed: value });
  }

  playQueue() {
    const { keyQueue, keySpeed } = this.state;
    // null key added to clear keyboard after last key is played
    const queue = [...keyQueue, null];
    queue.forEach((qk, index) => {
      setTimeout(() => this.makeKeyActive(qk), index * (keySpeed * 100));
    });
    this.setState({ keyQueue: [] });
  }

  render() {
    const { keys, keyHistory, keyQueue } = this.state;

    return (
      <main>
        <Keyboard
          keys={keys}
          keyPlayed={this.playKey}
        />
        <KeyLog
          keyHistory={keyHistory}
          clearHistory={this.clearHistory}
        />
        <ManualEntry
          keyQueue={keyQueue}
          updateKeyQueue={this.addKeysToQueue}
          updateKeySpeed={this.updateKeySpeed}
          playQueue={this.playQueue}
        />
      </main>
    );
  }
}
