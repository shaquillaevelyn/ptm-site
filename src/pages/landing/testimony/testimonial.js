/* eslint-disable react/display-name */
import React from 'react';
import './testimonial.css';
import testimonial from '../../../text/testimonial';

function Testimonials() {
  return (
    <div id='landing-testimonial'> 


      <section className="margin-section-lg" >

        <h2 className="header-text-md text-centre">Hear it from our members</h2>
        <p className="header-text-sm text-centre">See some of the words from members about Paddington Toastmasters </p>

        <div className="body-text-lg flex-row member-testimony flex-gap">

          {testimonial.filter((item) => (item.key == 2 || item.key == 5||item.key == 6 )).map((item) => (
            <div className="testimony" key={item.key}>
              <img src={item.image} alt={item.alt} />
              <p className="body-text-lg">
                {item.text}
              </p>
              {' '}
              <cite title="Source Title">
              --
                {item.name}
              </cite>
            </div>
          )) }

        </div>
      </section>

      <div className='grid about-body' id='president-image'>
        <div className='margin-section-md grid-01' >

          <img src={testimonial[7].image} alt={testimonial[7].alt} className='' />
        </div>
        <div className='grid-02'>


          <p className="header-text-sm president-text">And a note from our 2023-2024 president, Magu Quintana</p>
          <p className="testimony body-text-lg president-text">{testimonial[7].text}</p>
      

  
        </div>
      </div>
  
    </div>

  );
};

export default Testimonials;
