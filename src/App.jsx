import React from "react";
import { Banner } from "./components/banner/Banner";
import { NavBar } from "./components/navbar/NavBar";
import { Footer } from "./components/footer/Footer";
import { Cards } from "./components/cards/Cards";
import { Hero } from "./components/hero/Hero";
export const App = () => {
  return (
    <div>
      <NavBar />
      <Hero/>
      <Cards/>
      <Banner
        id="2"
        subtitle1="Descarga la aplicacion ahora!"
        paragraph="Disponible para tu dispositivo Android. comienza la experiencia ahora."
        styleBtn="download-btn"
        btn="Descargar ahora"
      />
      <Footer/>
    </div>
  );
};
