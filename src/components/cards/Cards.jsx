import React from "react";
import { CardInfo } from "./card/CardInfo";
import "./Cards.css";
export const Cards = () => {
  const cardsArray = [
    {
      title: "Crea tu cuenta",
      subtitle1: "Crea o ingresa tu cuenta ",
      subtitle2:"para comenzar.",
      paragraph1:
        "Registra a todas tus mascotas en tu cuenta ",
        paragraph2:"para llevarlas siempre contigo."
    },
    {
      title: "Explora el historial medico",
      subtitle1: "Registra y consulta ",
      subtitle2:"historiales medicos.",
      paragraph1:
        "Puedes registrar cualquier evento de ",
        paragraph2:"tus mascotas y no perderlos de vista."
    },
    {
      title: "Siempre contigo",
      subtitle1: "Todo el historial medico ",
      subtitle2:"a tus manos.",
      paragraph1:
        "Consulta el historial medico de tus mascotas ",
        paragraph2:"en cualquier momento y lugar.",
      btn: "true",
    },
  ];
  return (
    <div className="cards">
    <div className="main-title">
      <hr className="solid"></hr>
      <h1 id="text-info">¿Como funciona?</h1>
    </div>
      {cardsArray.map((card, i) => (
        <CardInfo
          key={i}
          id={i}
          title={card.title}
          subtitle1={card.subtitle1}
          subtitle2={card.subtitle2}
          paragraph1={card.paragraph1}
          paragraph2={card.paragraph2}
          btn={card.btn}
        />
      ))}
    </div>
  );
};
