import React from "react";
import './NavInformation.css';
import { makeStyles } from "@material-ui/core";
import logo from '../../assets/cp1.png';

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
export const NavInformation = () => {
    const classes = useStyles();
    return (
        <div id="navInfo">
            <img id="imageCellphoneInfo" src={logo} />
            <hr class="solid"></hr>
            <div id="text-info">
                <h1 id="text-info">¿Como funciona?</h1>
                <br></br>
            </div>
        </div>
    );
};