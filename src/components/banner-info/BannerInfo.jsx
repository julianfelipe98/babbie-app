import React from "react";
import './BannerInfo.css';
import phoneLogo from '../../assets/cp1.png';

export const NavInformation = () => {
    return (
        <div id="navInfo">
            <img id="imageCellphoneInfo" src={phoneLogo} alt="phone-logo" />
            <hr className="solid"></hr>
            <div id="text-info">
                <h1 id="text-info">¿Como funciona?</h1>
                <br></br>
            </div>
        </div>
    );
};