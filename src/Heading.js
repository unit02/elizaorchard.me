import React, { Component } from "react";

class Heading extends Component {
  render() {
    let className = "heading";

    return (
      <div className={className}>
        <img alt="header" src="background.jpg" />
        <h1>{this.props.children}</h1>
      </div>
    );
  }
}
export default Heading;
