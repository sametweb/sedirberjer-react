import React from "react";

import Welcome from "./HomePage/Welcome";
import Carousel from "./HomePage/Carousel";
import Products from "./HomePage/Products";

const HomePage = () => {
  return (
    <div>
      <Welcome />
      <Carousel />
      <Products />
    </div>
  );
};

export default HomePage;
