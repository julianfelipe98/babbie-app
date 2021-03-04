import React from "react";
import "./CardInfo.css";
import { Button } from "@material-ui/core";
import logoPhone from "../../../assets/cp2.png";

export const CardInfo = ({ id, title, subtitle, paragraph, btn }) => {
  const phone = (
    <div id="iconPhoneTool">
      <img id="imageCellphone" src={logoPhone} alt="logo-cellphone-2" />
    </div>
  );
  const info = (
    <div id="text-info-phone">
      <div id="card-title">
        <p>{title}</p>
      </div>
      <h1 id="subtitle-card">{subtitle}</h1>
      <h3>{paragraph}</h3>
      {btn === "true" && (
        <Button variant="outlined" color="primary" edge="end">
          Buscar historial medico
        </Button>
      )}
    </div>
  );

  return (
    <>
      {(parseInt(id) === 0 || parseInt(id)===2)? (
        <div className="card">
          {phone}
          {info}
        </div>
      ) : (
        <div className="card">
          {info}
          {phone}
        </div>
      )}
    </>
  );
};
