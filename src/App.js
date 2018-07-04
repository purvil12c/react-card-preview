import React, { Component } from 'react';
import Card from './components/card/Card'
import ColorPanel from './components/colorpanel/ColorPanel'

class App extends Component {

  state = {
    backgroudColor: '#000000',
    textColor: '#FFFFFF'
  }

  changeBackgroundColor = (color) => {
    if(color != undefined){
      this.setState({backgroundColor: color.hex});
    }
  }

  changeTextColor = (color) => {
    if(color != undefined){
      this.setState({textColor: color.hex});
    }
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col" style={{paddingTop: 40}}>
            <Card backgroundColor={this.state.backgroundColor} textColor={this.state.textColor}></Card>
          </div>
          <div className="col" style={{paddingTop: 40}}>
            <ColorPanel title={'Background Color'} changeColor = {this.changeBackgroundColor.bind(this)}></ColorPanel>
          </div>
          <div className="col" style={{paddingTop: 40}}>
            <ColorPanel title={'Text Color'} changeColor = {this.changeTextColor.bind(this)}></ColorPanel>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
