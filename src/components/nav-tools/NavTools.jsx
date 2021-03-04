import React from "react";
import "./NavTools.css";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core";
import logo from '../../assets/cp2.png';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 50,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 60px',
    },
});
export const NavTools = () => {
    const classes = useStyles();
    return (
        <div id="navTools">
            <div id="info-tools-one">

            <div id="text-info-phone">
                <div id="text-tools-link">
                    <p>Crea tu cuenta</p>
                </div>
                <h1>Crea o ingresa tu cuenta para comenzar.</h1>
                <h3>Registra a todas tus mascotas en tu cuenta para llevarlas siempre contigo</h3>
            </div>
            <div id="iconPhoneTool">
                <img id="imageCellphone" src={logo} />
            </div>
            </div>
        </div>
    );
};
