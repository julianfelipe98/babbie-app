import React from "react";
import "./Banner.css";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core";

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
export const Banner = () => {
    const classes = useStyles();
    return (
        <div id="banner">
            <div id="text-banner">
                <p>Aplicaion para la gestion veterinaria</p>
                <h1>¡El amor es una palabra de cuatro patas!</h1>
                <p>Descarga nuestra app en dispositivo android</p>
            </div>
            <Button className={classes.root}>Descargar</Button>
        </div>
    );
};
