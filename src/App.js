import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";
import ReferencesPage from "./components/pages/ReferencesPage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import Footer from "./components/Footer";

import { ProductsContext, data } from "./contexts/ProductsContext";

import "./assets/css/index.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <ProductsContext.Provider value={data}>
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/anasayfa" exact component={HomePage} />
      <Route path="/referanslar.html" component={ReferencesPage} />
      <Route path="/hakkimizda.html" exact component={AboutPage} />
      <Route path="/bize-ulasin.html" exact component={ContactPage} />
      <Footer />
    </ProductsContext.Provider>
  );
}

export default App;
