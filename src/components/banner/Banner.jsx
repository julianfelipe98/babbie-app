import React from "react";
import "./Banner.css";

export const Banner = ({ id, title, subtitle1,subtitle2, paragraph, styleBtn, btn }) => {
  return (
    <div id={`banner${id}`}>
      <div id="text-banner">
        <div className="banner-content">
          <p id="title">{title}</p>
          <h1 className="subtitle" id="subtitle1">{subtitle1}</h1>
          <h1 className="subtitle" id="subtitle2">{subtitle2}</h1>
          <p id="paragraph">{paragraph}</p>
          <button id={styleBtn}>{btn}</button>
        </div>
      </div>
    </div>
  );
};
