import React from 'react';
import fedor from '../images/fedor.jpg';
import shaq from '../images/shaq-test.jpg';
import pippa from '../images/pippa.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    fontFamily: 'Source Sans Pro',
    fontWeight: 400,
    fontSize: '30px',
    textAlign: 'centre',
  },
  paper: {
    padding: theme.spacing(6),

    color: theme.palette.text.secondary,
    height: '60vh',
  
    fontFamily: 'Source Sans Pro',
    fontWeight: 400,
    fontSize: '20px',
    textAlign: 'center',
  },
  image: {
    height: '200px',
    width: '160px',
    alignItems: 'center',
    borderRadius: '50%',
  },

}));

export default function Testimonials() {
  const classes = useStyles();

  return (
      
    <div className={classes.root}>
        <span className={classes.header}> Testimonials</span>
      <Grid container spacing={3}>
        <Grid item xs={4}>
        
          <Paper className={classes.paper}>
          <img src={shaq} alt='shaquilla' className={classes.image}></img>
              <p>Joining Toastmasters 18 months ago has had such a postive effect on me. I am a far more eloquent, competent and creative speaker; and during the Covid-19 pandemic and having all communications move to video calls, I have become more flexible and versatile in my style. 
                            These skills I know will be 100% applicable in our new normal! Toastmasters has also allowed me to build in my leadership potential.
                            There is ample opprtuntiy to develop yourself, develop others though mentorship  and develop your club to be the best that it could possibly be, through being a part of the club committee. 
                            Patiently, I wait for the pandemic to come to an end so we can go back to in person meetings where I can see all the smiling faces of my fellow members. 
                          </p> <cite title="Source Title">--Shaquilla </cite></Paper>
        </Grid>
        <Grid item xs={4}>
            
          <Paper className={classes.paper}>
          <img src={fedor} alt='fedor' className={classes.image}></img>
               <p>I have benefitted so much from being a member of Toastmasters.  Firstly, the skills I acquired gave me the confidence to accept a job that required frequent public speaking appearances. Secondly, I have gained evaluation skills that
                             now enable me to give constructive feedback to others using a positive format that highlights points for improvement in an acceptable, non-threatening way. I have also had the pleasure over the years of meeting so many interesting 
                             people from different walks of life. I can warmly recommend Toastmasters as a great and extremely cost-effective way to improve your public speaking, communication skills and grow in self-confidence.</p>
                             <cite title="Source Title">--Fedor </cite> </Paper >
        </Grid>
        <Grid item xs={4}>
        
          <Paper className={classes.paper}>
          <img src={pippa} alt='pippa' className={classes.image}></img>
              <p>I am what you might call a “legacy” in that my mum was a Toastmaster for many years. I am following in her footsteps as well as forging my own path.  For me, TM has allowed me to practice speaking in a safe environment and try out
                             techniques that I might not have had the courage to do on my own.  The club members are so supportive and encouraging that you feel free to try things out and give it a go.  I have learned that my nerves before a speech can be 
                             harnessed as energy rather than a roadblock, and I have learned that nervousness just means I care and want to do my best.  I still get nervous but that’s perfectly normal– it’s how you respond to it that matters.  
                             Even after many years of being at Paddington TM, I am still learning new skills and really enjoy the relaxed and fun spirit of our club</p>
                            <cite title="Source Title">--Pippa </cite></Paper>
        </Grid>

      </Grid>
    </div>
  );
}
