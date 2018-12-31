import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Scale from '../Scale';
import './keyLog.css';

const KeyLog = ({ keyHistory, clearHistory }) => (
  <div className="KeyLogContainer">
    <div className="KeyLog__title">
      <h3>
        <span> Key History </span>
        {(keyHistory.length) > 0
          && <FontAwesomeIcon onClick={clearHistory} icon={faTimesCircle} size="sm" />
        }
      </h3>
    </div>
    <div className="scaleContainer">
      {keyHistory.map((key, i) => key && <Scale key={key + i.toString()} notePlayed={key} />)}
    </div>
  </div>
);

KeyLog.propTypes = {
  clearHistory: PropTypes.func.isRequired,
  keyHistory: PropTypes.arrayOf(PropTypes.string),
};

export default KeyLog;
