import React from 'react';
import '../index';
import  toastmasterslogowhite from '../images/toastmasterslogowhite.png';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    navBar: {
      backgroundColor: '#004165',
      minHeight: '10vh',
    },
    image: {
      paddingTop: '2vh',
      paddingBottom: '2vh',
      paddingRight: '1vh',
      maxWidth: '87px',
      maxHeight: '72px',
    },
    typography: {
      fontFamily: 'Source Sans Pro',
      fontWeight: 400,
      fontSize: '40px',
    },
    title: {
      flexGrow: 1,
    },
    links: {
      marginRight: theme.spacing(4),
      display: 'inline',
      color: '#ffffff',
    },
  }));

 export default function Header() {
    const classes = useStyles();
    // const preventDefault = (event) => event.preventDefault();

    return (
    <div className={classes.root}>
    <AppBar className={classes.navBar} position="static">
    <Toolbar>
       <img  className={classes.image} alt="white tmi logo" src={toastmasterslogowhite}></img>
       &#10;
        <Typography variant="h2" className={classes.typography}>
         Paddington Toastmasters

        </Typography>
{/* <div  className={classes.links}>
        <Link href="#" onClick={preventDefault} color="inherit">
    Home
  </Link>
  <Link href="#" onClick={preventDefault} style={{ flex: 1 }} color="inherit">
  About Us
  </Link>
  <Link href="#" onClick={preventDefault} color="inherit">
    Testimonials
  </Link>
  <Link href="#" onClick={preventDefault} color="inherit">
    Join Us
  </Link>
  </div> */}
    </Toolbar>
    </AppBar>
    </div>
);
}




