import React from "react";
import { CardInfo } from "./card/CardInfo";
import "./Cards.css";
export const Cards = () => {
  const cardsArray = [
    {
      title: "Crea tu cuenta",
      subtitle: "Crea o ingresa tu cuenta para comenzar.",
      paragraph:
        "Registra a todas tus mascotas en tu cuenta pra llevarlas siempre contigo.",
    },
    {
      title: "Explora el historial medico",
      subtitle: "Registra y consulta historiales medicos.",
      paragraph:
        "Puedes registrar cualquier evento de tus mascotas y no perderlos de vista.",
    },
    {
      title: "Siempre contigo",
      subtitle: "Todo el historial medico a tus manos.",
      paragraph:
        "Consulta el historial medico de tus mascotas en cualquier momento y lugar.",
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
          subtitle={card.subtitle}
          paragraph={card.paragraph}
          btn={card.btn}
        />
      ))}
    </div>
  );
};
