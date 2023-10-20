import React, { useEffect, useRef } from 'react';
import About from './about/about';
import Jumbotron from './jumbo/jumbotron';
import Process from './process/process';
import { quoteArray, Quotation } from './quotes/quotations';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import Testimonials from './testimony/testimonial';
import ContactForm from './contact-form/contact-form.jsx';
import Content from '../../components/utils/layout';
import { scrollToTop } from '../../components/utils/scroll';

function Landing() {

  const welcomeRef = useRef(null);
  const meetingRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);


  useEffect( () =>{
    scrollToTop(), [];  
  });


  return (
    <>

      <Content>
        <Header ref={welcomeRef}/>
        <Jumbotron />
        <Quotation
          id={quoteArray[1].id}
          quote={quoteArray[1].quote}
          author={quoteArray[1].author}
        />
        <About ref={welcomeRef} />
        <Quotation
          id={quoteArray[2].id}
          quote={quoteArray[2].quote}
          author={quoteArray[2].author}
        />
        <Process ref={meetingRef}/>
        <Quotation
          id={quoteArray[3].id}
          quote={quoteArray[3].quote}
          author={quoteArray[3].author}
        />
        <Testimonials ref={testimonialRef} />
        <ContactForm ref={contactRef} />
      </Content>
      <Footer />
    </>
  );
}
export default Landing;
