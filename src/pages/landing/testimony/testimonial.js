import React from 'react';
import './testimonial.css';
import { testimonial } from '../../../text/testimonial.json';

export default function Testimonials() {
  return (
    <section className="margin-section-lg">

      <h2 className="header-text-md text-centre">Hear it from our members</h2>
      <p className="header-text-sm text-centre">See some of the words from members about Paddington Toastmasters </p>

      <div className="body-text-lg flex-row member-testimony flex-gap">

        {testimonial.filter((item) => item.key > 3).map((item) => (
          <div className="testimony">
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
  );
}
