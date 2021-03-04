import React from "react";
import logo from "../../assets/logo.svg";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./Footer.css";
export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-inside">
                <img id="logo-img" src={logo} alt="logo-babbie"></img>
                <div id="icons" className="center-align">
                    <a href="facebook.com">
                        <FacebookIcon fontSize="large" />
                    </a>
                    <a href="instagram.com">
                        <InstagramIcon fontSize="large" />
                    </a>
                    <a href="twitter.com">
                        <TwitterIcon fontSize="large" />
                    </a>
                </div>
                <div className="center-align">
                    <p>Copyright 2021 BabbieApp</p>
                </div>
            </div>
        </div>
    );
};
