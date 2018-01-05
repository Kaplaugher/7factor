import React, { Component } from "react";
import Gallery from "react-photo-gallery";

class Woods extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  // .then(images => this.setState({ images }));
  // .then(images => this.setState({ images }));
  componentDidMount() {
    fetch("/images")
      .then(res => res.json())
      .then(images => this.setState({ images }));
  }

  render() {
    return (
      <div>
        <h1>Woods Images</h1>
        <Gallery photos={this.state.images} />
      </div>
    );
  }
}
export default Woods;
