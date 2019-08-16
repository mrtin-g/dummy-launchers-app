import React from "react";

const Launcher = props => {
  return (
    <div style={props.style}>
      <p>{props.name}</p>
      <img
        src={props.src}
        alt="crab"
        href={props.link}
        height="130px"
        width="130px"
      />
    </div>
  );
};

export default Launcher;
