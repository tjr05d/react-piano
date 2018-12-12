import React, { Component } from 'react';
import SharpKey from '../SharpKey'
import './key.css';

export default class Key extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sharpKeyPosition: {
        top: 0,
        right: 0,
      } 
    }
  }

  componentDidMount() {
    this.setState({
      sharpKeyPosition: {
        top: 0,
        right: -20,
        backgroundColor: 'green'
      } 
    })
  }
  render() {
    return (
      <div className="KeyContainer"> 
        {this.props.note} 
        {this.props.hasSharp && <SharpKey computedStyles={this.state.sharpKeyPosition}/> }
      </div>
    );
  }
}