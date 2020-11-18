import React, { Component } from 'react';

class Band extends Component {

  render() {
    // console.log(this.props)
    return(
      <div>
        <li>{this.props.band.name} <button onClick={this.props.deleteBand}>X</button></li>
      </div>
    );
  }
};

export default Band;
