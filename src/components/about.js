import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import talk from '../images/talk.jpg';

const useStyles = makeStyles((theme) =>({
    centre: {
        display: 'grid',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',



    }
}))


export default function About(){

    const classes = useStyles(); 

    return(

        <Grid container spacing={1} className={classes.centre}>

            <Grid item xs={6} className={classes.centre}>
            Public Speaking is NOT to be Feared
        <br></br>
            It can be enjoyed and Paddington Toastmasters are here to help!&#10; We are a lively and supportive club, ready to support you as you build your confidence, public speaking and communication skills.&#10;
            Whether you are a complete newbie or a seasoned public speaker, you are welcome to join us at our meetings where we can improve together.

            Progress with us
            We pride ourselves on creating a relaxed and informal environment where you feel comfortable to participate and most importantly, have a laugh while doing so.&#10;
            On becoming a member, we offer mentorship and support as you make your way through the Toastmasters International Educational Program, Pathways

            Reap the Benefits
            Help us to help you to Build Leadership Skills,Maximise your Potential, in the workplace and beyond, and Enhance Self-Awareness
            The benefits are endless We are waiting welcome you!

            </Grid>
            <Grid item xs={6} className={classes.centre}>
            <img src={talk} alt='talk '></img>
            </Grid>
 
        </Grid>

    );
}