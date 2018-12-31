import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SharpKey from '../SharpKey';
import './key.css';

export default class Key extends Component {
  constructor(props) {
    super(props);
    this.keyPlayed = this.keyPlayed.bind(this);
  }

  keyPlayed() {
    const { note, keyPlayed } = this.props;
    keyPlayed(note);
  }

  render() {
    const { active, note, hasSharp } = this.props;
    const bgColor = active ? '#B2EBF2' : 'white';

    return (
      <div
        className="KeyContainer"
        onClick={this.keyPlayed}
        style={{ backgroundColor: bgColor }}
      >
        {note}
        {hasSharp && <SharpKey /> }
      </div>
    );
  }
}

Key.propTypes = {
  active: PropTypes.bool.isRequired,
  hasSharp: PropTypes.bool.isRequired,
  keyPlayed: PropTypes.func.isRequired,
  note: PropTypes.string.isRequired,
};
