import React, { Component } from "react";

var textStyle = {
  textAlign: 'center'
}
class Home extends Component {
  render() {
    return (
      <div>
        <h1 style={textStyle}>What up.</h1>
        <h2 style={textStyle}>In this React app I am pulling images from an express api</h2>
        <h3 style={textStyle}>Check it out</h3>
        <h4 style={textStyle}>Use the links on the navbar</h4>
      </div>
    );
  }
}
export default Home;
