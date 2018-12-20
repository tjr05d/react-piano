import React, { Component } from 'react';
import SharpKey from '../SharpKey'
import './key.css';

export default class Key extends Component {
  constructor(props) {
    super(props);
    this.keyPlayed = this.keyPlayed.bind(this);
  }

  keyPlayed(e) {
    e && e.preventDefault();
    this.props.keyPlayed(this.props.note);
  }


  render() {
    const {active, note, hasSharp } = this.props;
    const bgColor  = active ? '#B2EBF2' : 'white';

    return (
      <div className="KeyContainer" onClick={this.keyPlayed} style={{backgroundColor: bgColor}}> 
        {note}
        {hasSharp && <SharpKey /> }
      </div>
    );
  }
}