import React, { useState, useContext } from "react";
import { ProductsContext } from "../../../contexts/ProductsContext";

import Overlay from "../Overlay";

const Products = () => {
  const [imgToDisplay, setImgToDisplay] = useState(null);
  const products = useContext(ProductsContext);

  const handleImageClick = index => setImgToDisplay(index);

  return (
    <div className="gallery">
      <h2>Neler yaptık?</h2>
      <div className="references">
        {products.map((product, index) => (
          <div key={product.title} className="item">
            <img
              src={product.imgURL}
              alt={product.title}
              onClick={() => handleImageClick(index)}
            />
            {imgToDisplay === index ? (
              <Overlay
                handleImageClick={handleImageClick}
                src={product.originalImgURL}
                title={product.title}
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
