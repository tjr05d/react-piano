import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './manualEntry.css';

const VALID_CHARS = ['C', 'D', 'E', 'F', 'G', 'A', 'B', ','];

export default class ManualEntry extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSpeedChange = this.handleSpeedChange.bind(this);
    this.formValidation = this.formValidation.bind(this);
    this.state = {
      validForm: false,
      errMessage: '',
    };
  }

  handleChange(e) {
    const { updateKeyQueue } = this.props;
    e.preventDefault();
    const input = e.target.value;
    const sanInput = input.replace(/\s/g, '').split(',').map(char => char.toUpperCase());
    updateKeyQueue(sanInput);
    this.formValidation(sanInput);
  }

  handleSpeedChange(e) {
    const { updateKeySpeed } = this.props;
    e.preventDefault();
    updateKeySpeed(e.target.value);
  }

  handleSubmit(e) {
    const { playQueue } = this.props;
    e.preventDefault();
    playQueue();
  }

  formValidation(sanitizedInput) {
    let message;
    let validilty;
    const invalidChars = sanitizedInput.filter(char => (char !== '') && (VALID_CHARS.indexOf(char) === -1));

    if (invalidChars.length > 0) {
      message = `Invalid Note(s): ${invalidChars.join(',')}`;
      validilty = false;
    } else {
      message = '';
      validilty = true;
    }
    this.setState({ errMessage: message, validForm: validilty });
  }

  render() {
    const { keyQueue } = this.props;
    const { errMessage, validForm } = this.state;

    return (
      <div className="ManualEntryContainer">
        <h3>Manual Entry </h3>
        <form className="ManualEntryContainer__form" onSubmit={this.handleSubmit}>
          <div className="form__slider">
            <label htmlFor="speed_fast"> Fast </label>
            <input
              id="speed_fast"
              type="range"
              name="speed"
              min="1"
              max="10"
              step="1"
              defaultValue="5"
              onChange={this.handleSpeedChange}
            />
            <label htmlFor="speed_slow"> Slow </label>
          </div>

          <input
            id="speed_slow"
            type="text"
            className="form__input"
            value={keyQueue.join(',')}
            onChange={this.handleChange}
          />

          {errMessage
            && (
            <div className="form__errorMessage">
              {errMessage}
            </div>
            )
          }
          <button className="form__submit" type="submit" value="Play" disabled={!validForm}>
            <FontAwesomeIcon icon={validForm ? faPlay : faExclamationCircle} size="lg" />
          </button>
        </form>
      </div>
    );
  }
}

ManualEntry.propTypes = {
  keyQueue: PropTypes.arrayOf(PropTypes.string).isRequired,
  playQueue: PropTypes.func.isRequired,
  updateKeyQueue: PropTypes.func.isRequired,
  updateKeySpeed: PropTypes.func.isRequired,
};
