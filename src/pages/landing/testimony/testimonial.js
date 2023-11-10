/* eslint-disable react/display-name */
import React, {forwardRef} from 'react';
import './testimonial.css';
import { testimonial } from '../../../text/testimonial.json';

function Testimonials() {
  return (
    <section className="margin-section-lg">

      <h2 className="header-text-md text-centre">Hear it from our members</h2>
      <p className="header-text-sm text-centre">See some of the words from members about Paddington Toastmasters </p>

      <div className="body-text-lg flex-row member-testimony flex-gap">

        {testimonial.filter((item) => (item.key > 3 && item.key < 7)).map((item) => (
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
      <div className=" margin-section-md about-body" >
        <img src={testimonial[7].image} alt={testimonial[7].alt} />
        <p className="header-text-sm text-centre">And a note from our 2023-2024 president, Magu Quintana</p>
        <p className="testimony body-text-lg">{testimonial[7].text}</p>
      </div>
    </section>
  );
};

export default Testimonials;
