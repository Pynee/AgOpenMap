import React from "react";

const Button = props => {
  return (
    <button
      className="side-panel-button"
      style={{
        background: "rgba(255,255,255,255) url(" + [props.image] + ".png)"
      }}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
