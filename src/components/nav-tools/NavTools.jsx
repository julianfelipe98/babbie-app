import React from "react";
import "./NavTools.css";
import logoPhone from "../../assets/cp2.png";

export const NavTools = ({ id, title, subtitle, paragraph }) => {
    const phone = (
        <div id="iconPhoneTool">
            <img id="imageCellphone" src={logoPhone} alt="logo-cellphone-2" />
        </div>
    );
    const info = (
        <div id="text-info-phone">
            <div id="text-tools-link">
                <p>{title}</p>
            </div>
            <h1>{subtitle}</h1>
            <h3>{paragraph}</h3>
        </div>
    );
    return (
        <div id="navTools">
            {(parseInt(id)===1)?<div id="info-tools-one">{phone}{info} </div>:<div id="info-tools-one">{info}{phone}</div>}
        </div>
    );
};
