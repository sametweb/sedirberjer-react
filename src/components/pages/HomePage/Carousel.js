import React from "react";

import koltuk from "../../../assets/img/koltuk.jpg";
import bistro from "../../../assets/img/bistro.jpg";
import masa from "../../../assets/img/masa.jpg";
import sedir from "../../../assets/img/sedir.jpg";

const Carousel = () => {
  return (
    <section className="products">
      <h2>Neler yapıyoruz?</h2>
      <div className="categories">
        <div className="item">
          <img src={koltuk} alt="cafe koltuklari & berjerleri" />
          <h3>Koltuk & Berjer</h3>
        </div>
        <div className="item">
          <img src={bistro} alt="cafe bistro sandalyeleri" />
          <h3>Bistro Sandalye</h3>
        </div>
        <div className="item">
          <img src={masa} alt="cafe masalari" />
          <h3>Masa</h3>
        </div>
        <div className="item">
          <img src={sedir} alt="cafe sedirler" />
          <h3>Sedir</h3>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
