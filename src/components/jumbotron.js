import React from 'react';
import { ImageListItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    jumbo: {
        display: 'grid',
        maxWidth: '100vw',
        maxHeight: '65vh',
        minWidth: '100vw',
        minHeight: '65vh',
        backgroundColor: 'red',
    },

    jumboText: {

    },

    jumboExtra: {
        display: 'grid',
        maxWidth: '100vw',
        maxHeight: '10vh',
        minWidth: '100vw',
        minHeight: '10vh',
        backgroundColor: 'blue',

    },

}))
export default function Jumbotron() {
    const classes = useStyles();

    return(
        <>
        <div className={classes.jumbo}>

        <h2>We are Paddington Toastmaters</h2>
        <h3><u>A Club Like No Other</u></h3>

        </div>
        <div className={classes.jumboExtra}></div>
        </>
    )
}