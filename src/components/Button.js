import React from "react";

const Button = props => {
  return (
    <div>
      <button onClick={props.clickAction} style={props.style}>
        {props.labelText}
      </button>
    </div>
  );
};

export default Button;
