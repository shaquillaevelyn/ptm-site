import React from 'react';
import About from './about/about';
import Jumbotron from './jumbo/jumbotron';
import Process from './process/process';
import { quoteArray, Quotation } from './quotes/quotations';
import Testimonials from './testimony/testimonial';
import ContactForm from './contact-form/contact-form.jsx';



/* eslint-disable react/display-name */


function Landing() {

  return (
    <>
      <Jumbotron />
      <Quotation
        id={quoteArray[1].id}
        quote={quoteArray[1].quote}
        author={quoteArray[1].author}
      />
      <div id='landing-welcome' className='scroll'>
        <About />
      </div>

      <Quotation
        id={quoteArray[2].id}
        quote={quoteArray[2].quote}
        author={quoteArray[2].author}
      />
      <div id='landing-meeting' className='scroll'>
        <Process/>
      </div>
       
      <Quotation
        id={quoteArray[3].id}
        quote={quoteArray[3].quote}
        author={quoteArray[3].author}
      />
      <div id='landing-testmonial' className='scroll'>
        <Testimonials />
      </div>

      <div id='landing-contact' className='scroll'>
        <ContactForm />
      </div>
    </>
  );
}
export default Landing;
