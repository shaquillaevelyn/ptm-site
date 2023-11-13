/* eslint-disable react/display-name */
import React, { useState, forwardRef } from 'react';
import { JoinButtonBig } from '../../../components/buttons/join-button';
import leap from '../../../images/leap1.png';

function ContactForm(){

  return (
    <>

      <p className='chunky-body-text'> Ready to take the leap?</p>
      <div id='landing-contact' className='margin-section-sm about-body'>
        <section className="margin-section-lg about-body-col">
       
          <p>Join us at our next meeting!</p>
          <p>
            Next meeting : Tuesday {}
            <br />
              Meetings every 1st and 3rd Tuesday of the Month
          </p>
            18.00 for 18.15 start, 19.30 finish
          {' '}
          <JoinButtonBig />

        </section>
        <section className="margin-section-lg about-body-col">
        
          <iframe name='paddington toastmasters location' width="600" height="450" style={{border:0}} loading="lazy" allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJEaFgkgAQdkgR8OoAaoLyd_I&key=..."></iframe> 
        </section>
      </div>

    </>
  );
};

export default ContactForm;
