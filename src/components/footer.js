
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './footer.css';

// src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=&v=weekly"
// async


export default function Footer() {

 

      
        function FormRow() {
          return (
            <React.Fragment>
              <Grid item xs={2}>
                <Paper>item</Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper>item</Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper>item</Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper>item</Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper>item</Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper>item</Paper>
              </Grid>
            </React.Fragment>
          );
        }
      
        return (
            <div className='footer'>
          <div >
            <Grid container spacing={1}>
              <Grid container item xs={12} spacing={1}>
                <FormRow />
              </Grid>
              
            </Grid>
          </div>
          </div>
        );



    
}