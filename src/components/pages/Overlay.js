import React from "react";

const Overlay = props => {
  return (
    <div className="overlay" onClick={() => props.handleImageClick(null)}>
      <span>
        {" "}
        <i className="fa fa-times-circle"></i>
      </span>
      <img
        src={props.src}
        alt={props.title}
        onClick={e => e.stopPropagation()}
      />
    </div>
  );
};

export default Overlay;
