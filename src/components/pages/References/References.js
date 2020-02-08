import React, { useState, useContext } from "react";
import { ReferencesContext } from "../../../contexts/ReferencesContext";
import Overlay from "../Overlay";

const References = () => {
  const [imgToDisplay, setImgToDisplay] = useState(null);
  const references = useContext(ReferencesContext);

  const handleImageClick = index => setImgToDisplay(index);

  console.log({ imgToDisplay });
  return (
    <section className="references">
      {references.map((reference, index) => (
        <div key={index} className="ref">
          <img
            src={reference.path}
            alt={reference.title}
            onClick={() => handleImageClick(index)}
          />
          {imgToDisplay === index ? (
            <Overlay
              handleImageClick={handleImageClick}
              src={reference.path}
              title={reference.title}
            />
          ) : null}
          <div className="info">
            <h3>{reference.title}</h3>
            <p className="location">{reference.location}</p>
            <p className="p">{reference.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default References;
