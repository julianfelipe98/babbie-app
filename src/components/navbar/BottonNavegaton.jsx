import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles({
  root: {
    width: "50%",
  },
});
export const BottonNavegaton = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Inicio"  />
        <BottomNavigationAction label="Producto" />
        <BottomNavigationAction label="Contacto"  />
      </BottomNavigation>
    );
  
}
