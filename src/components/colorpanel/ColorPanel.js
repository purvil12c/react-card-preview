import React, { Component } from 'react';
import { SwatchesPicker } from 'react-color';

class ColorPanel extends Component{

  state = {
    color: '#000000'
  }

  constructor(props){
    super(props);
    this.props.changeColor();
  }
  render(){
    return(
      <div>
        <label>{this.props.title}</label>
        <SwatchesPicker color={this.state.background} onChange={this.handleColorChange}/>
      </div>
    )
  }

  handleColorChange = (color)=>{
    this.setState({color: color.hex})
    this.props.changeColor(color);
  };
}

export default ColorPanel;
