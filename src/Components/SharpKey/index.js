import React, { Component } from 'react';
import './sharpKey.css';

export default class SharpKey extends Component {
  constructor(props) {
    super(props)
    this._element = React.createRef();
    this.state = {
      computedRight: 0,
    }
  }
  //right positioning is dynamically set based on the element width
  updateDimensions() {
    this.setState({
      computedRight: (this._element.current.clientWidth / -2)
    })
  }

  componentDidMount() {
    this.updateDimensions()
    // resize event to handle postioning on a user window resize
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    // remove event listenera when the component unmounts
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }
  
  render() {
    return (
      <div 
        ref={this._element} 
        className="SharpKeyContainer" 
        style={{right: this.state.computedRight}}
      >
      </div>
    );
  }
}