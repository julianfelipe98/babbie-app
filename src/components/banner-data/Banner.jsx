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
export const Banner = ({id, title,subtitle,paragraph}) => {
    const classes = useStyles();
    return (
        <div id={`banner${id}`}>
            <div id="text-banner">
                <p>{title}</p>
                <h1>{subtitle}</h1>
                <p>{paragraph}</p>
            </div>
            <Button className={classes.root}>Descargar</Button>
        </div>
    );
};
