import React from "react";
import { Banner } from "../banner/Banner";
import phoneLogo from '../../assets/cp1.png';
import './Hero.css'
export const Hero = () => {
  const banner = {
    id: "1",
    title: "Aplicacion para la gestion veterinaria",
    subtitle: "¡El amor es una palabra de cuatro patas!",
    paragraph: "Descarga nuestra app en dispositivos android",
    styleBtn: "download-btn2",
    btn: "Descargala aqui",
  };
  return (
    <div className="hero-component">
      <Banner
        id={banner.id}
        title={banner.title}
        subtitle={banner.subtitle}
        paragraph={banner.paragraph}
        styleBtn={banner.styleBtn}
        btn={banner.btn}
      />
      <img id="imageCellphoneInfo" src={phoneLogo} alt="phone-logo" />
    </div>
  );
};
