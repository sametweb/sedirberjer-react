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
        <Link to="index.html">Anasayfa</Link>
        <Link to="referanslar.html">Referanslarımız</Link>
        <Link to="hakkimizda.html">Hakkımızda</Link>
        <Link to="bize-ulasin.html">Bize Ulaşın</Link>
      </nav>
    </header>
  );
};

export default Header;
