import React from 'react';
import PropTypes from 'prop-types';
import './scale.css';

const noteOffset = {
  C: 3.25,
  D: 3,
  E: 2.75,
  F: 2.50,
  G: 2.25,
  A: 2,
  B: 1.75,
};

const Scale = ({ notePlayed }) => {
  const topValue = `${noteOffset[notePlayed].toString()}em`;
  return (
    <div>
      <div className="innerContainer">
        {[...Array(7)].map((_,i) => <div key={notePlayed + i} className="bar" />)}
        <div className="note" style={{ top: topValue }} />
      </div>
      <div className="noteValue">
        { notePlayed }
      </div>
    </div>
  );
};

Scale.propTypes = {
  notePlayed: PropTypes.string.isRequired,
};

export default Scale;
