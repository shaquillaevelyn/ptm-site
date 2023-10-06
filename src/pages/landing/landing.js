import React from 'react';
import About from './about/about';
import Jumbotron from './jumbo/jumbotron';
import Process from './process/process';
import { quoteArray, Quotation } from './quotes/quotations';

import Testimonials from './testimony/testimonial';
import ContactForm from './contact-form/contact-form.jsx';
import Content from '../../components/utils/layout';

function Landing() {
  return (
    <Content>
      <Jumbotron />
      <Quotation
        id={quoteArray[1].id}
        quote={quoteArray[1].quote}
        author={quoteArray[1].author}
      />
      <About />
      <Quotation
        id={quoteArray[2].id}
        quote={quoteArray[2].quote}
        author={quoteArray[2].author}
      />
      <Process />
      <Quotation
        id={quoteArray[3].id}
        quote={quoteArray[3].quote}
        author={quoteArray[3].author}
      />
      <Testimonials />
      <Quotation
        id={quoteArray[5].id}
        cta={quoteArray[5].cta}
        cta1={quoteArray[5].cta1}
        cta2={quoteArray[5].cta2}
      />
      <ContactForm />
    </Content>
  );
}
export default Landing;
