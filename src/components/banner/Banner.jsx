import React from "react";
import "./Banner.css";

export const Banner = ({ id, title, subtitle, paragraph,styleBtn,btn }) => {
  return (
    <div id={`banner${id}`}>
      <div id="text-banner">
        <p id="title">{title}</p>
        <h1 id="subtitle">{subtitle}</h1>
        <p id="paragraph">{paragraph}</p>
      </div>
      <button id={styleBtn}>{btn}</button>
    </div>
  );
};
