import React, { Component } from 'react';

class Card extends Component{

  render(){
    const styles = {
      card: {
        backgroundColor: this.props.backgroundColor?this.props.backgroundColor:'black',
        width: 300,
        height: 300,
        transition: 'background-color 0.5s',
      },
      cardTitle: {
        color: this.props.textColor?this.props.textColor:'white',
        transition: 'color 0.5s',
      }
    }
    return (

      <div style={styles.card} className="text-center">
        <h1 style={styles.cardTitle}>
          Preview
        </h1>
      </div>

    )
  }
}

export default Card
