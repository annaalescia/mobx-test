import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  render() {
    const { text } = this.props;
    return <button onClick={this.handleClick}>{text}</button>;
  }

  handleClick = e => {
    const { onClick, data } = this.props;
    onClick({ data, e });
  };

  static propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    data: PropTypes.object
  };
}

export default Button;
