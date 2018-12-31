import React from 'react';
import PropTypes from 'prop-types';
import Key from '../Key';
import './keyboard.css';

const Keyboard = ({ keys, keyPlayed }) => (
  <div className="KeyboardContainer">
    { keys.map(key => (
      <Key
        key={key.note}
        note={key.note}
        active={key.active}
        hasSharp={key.hasSharp}
        keyPlayed={keyPlayed}
      />
    ))
    }
  </div>
);

Keyboard.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.object).isRequired,
  keyPlayed: PropTypes.func.isRequired,
};

export default Keyboard;
