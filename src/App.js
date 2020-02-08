import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";
import ReferencesPage from "./components/pages/ReferencesPage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import Footer from "./components/Footer";

import { ProductsContext, data as products } from "./contexts/ProductsContext";
import {
  ReferencesContext,
  data as references
} from "./contexts/ReferencesContext";

import "./assets/css/index.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <ProductsContext.Provider value={products}>
      <ReferencesContext.Provider value={references}>
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/index.html" exact component={HomePage} />
        <Route path="/referanslar.html" component={ReferencesPage} />
        <Route path="/hakkimizda.html" exact component={AboutPage} />
        <Route path="/bize-ulasin.html" exact component={ContactPage} />
        <Footer />
      </ReferencesContext.Provider>
    </ProductsContext.Provider>
  );
}

export default App;
