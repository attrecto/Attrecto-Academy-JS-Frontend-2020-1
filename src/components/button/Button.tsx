import React, { Component } from "react";

export class Button extends Component {
  onClick() {
    console.log('Clicked');
  }

  render() {
    return (
      <button onClick={this.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
