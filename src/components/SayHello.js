import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SayHello extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    catName: PropTypes.string
  };
  componentDidMount() {
    console.log("Comp did mount of Sayhello", this.props);
  }

  render() {
    console.log("Render of SayHello", this.props);
    return (
      <div>
        <p>Hello World {this.props.name}</p>
      </div>
    );
  }
}
