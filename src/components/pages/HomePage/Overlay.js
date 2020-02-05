import React from "react";

const Overlay = props => {
  return (
    <div className="overlay" onClick={() => props.handleImageClick(null)}>
      <span>X</span>
      <img
        src={props.src}
        title={props.title}
        onClick={e => e.stopPropagation()}
      />
    </div>
  );
};

export default Overlay;
