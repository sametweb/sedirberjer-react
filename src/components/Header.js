import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>
          <Link to="/">sedir & berjer</Link>
        </h1>
      </div>
      <nav>
        <Link to="/">Anasayfa</Link>
        <Link to="referanslar">Referanslarımız</Link>
        <Link to="hakkimizda">Hakkımızda</Link>
        <Link to="bize-ulasin">Bize Ulaşın</Link>
      </nav>
    </header>
  );
};

export default Header;
