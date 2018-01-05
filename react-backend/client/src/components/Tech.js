import React, { Component } from "react";
import Gallery from "react-photo-gallery";
class Tech extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  // .then(images => this.setState({ images }));
  // .then(images => this.setState({ images }));
  componentDidMount() {
    fetch("/images/tech")
      .then(res => res.json())
      .then(images => this.setState({ images }));
  }

  render() {
    return (
      <div>
        <h1>Tech Images</h1>
        <Gallery photos={this.state.images} />
        {console.log('this.state', this.state)}
      </div>
    );
  }
}
export default Tech;
