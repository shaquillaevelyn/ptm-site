import React from 'react';
import Grid from '@material-ui/core/Grid';
import talk from '../images/talk.jpg';


export default function About(){

    return(

        <Grid container spacing={3}>
        <Grid item xs={3}>
        Public Speaking is NOT to be Feared
    
        It can be <strong>enjoyed</strong> and Paddington Toastmasters are here to help!&#10; We are a lively and supportive club, ready to support you as you build your confidence, public speaking and communication skills.&#10;
        Whether you are a complete newbie or a seasoned public speaker, you are welcome to join us at our meetings where we can improve together.

        Progress with us
        We pride ourselves on creating a <strong>relaxed</strong> and <strong>informal</strong> environment where you feel comfortable to participate and most importantly, have a laugh while doing so.&#10;
        On becoming a member, we offer mentorship and support as you make your way through the Toastmasters International Educational Program, Pathways

        Reap the Benefits
        Help us to help you to Build Leadership Skills,Maximise your Potential, in the workplace and beyond, and Enhance Self-Awareness
        The benefits are endless We are waiting welcome you!

        </Grid>
        <Grid item xs={3}>
        <img src={talk} alt='talk '></img>
        </Grid>
        <Grid item xs={3}></Grid>
        </Grid>

    );
}