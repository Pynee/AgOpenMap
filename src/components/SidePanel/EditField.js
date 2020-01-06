import React, { Component } from "react";

class InputField extends Component {
  state = {
    editNamefield: ""
  };

  render() {
    return (
      <input
        className="inputfield"
        autoFocus
        type="text"
        placeholder={this.props.node.text}
        value={this.editNamefield}
        onBlur={this.props.onEditReady}
        onKeyDown={this.props.onEditReady}
        key="nameedit"
        id="nameedit"
        name="nameedit"
      />
    );
  }
}

export default InputField;
