import React, { Component } from 'react';
import './manualEntry.css'

export default class ManualEntry extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange(e) {
    e.preventDefault();
    this.props.updateKeyQueue(e.target.value)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.playQueue()
  }

  render() {
    return (
      <div className="ManualEntryContainer"> 
        <h3>Manual Entry </h3>
        <form className="ManualEntryContainer__form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form__input"
            value={this.props.keyQueue.join(',')}
            onChange={this.handleChange}
          />
          <input className="form__submit" type="submit" value="Play" />
        </form>
      </div>
    );
  }
}