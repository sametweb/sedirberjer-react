import React from "react";

const Carousel = () => {
  return (
    <section className="products">
      <h2>Neler yapıyoruz?</h2>
      <div className="categories">
        <div className="item">
          <img src="./img/koltuk.jpg" alt="cafe koltuklari & berjerleri" />
          <h3>Koltuk & Berjer</h3>
        </div>
        <div className="item">
          <img src="./img/bistro.jpg" alt="cafe bistro sandalyeleri" />
          <h3>Bistro Sandalye</h3>
        </div>
        <div className="item">
          <img src="./img/masa.jpg" alt="cafe masalari" />
          <h3>Masa</h3>
        </div>
        <div className="item">
          <img src="./img/sedir.jpg" alt="cafe sedirler" />
          <h3>Sedir</h3>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
