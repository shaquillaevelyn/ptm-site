/* eslint-disable react/display-name */
import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from './scroll';
import { flushSync } from 'react-dom';

export const ROOT = '/';
export const MEETPTM = '/meet-ptm';
export const RESOURCES = '/resources';
export const FAQQ = '/faq';
export const PRIVACY = '/privacy-policy';


const forwardLinks = ({}, ref) => {

  const {welcomeRef, meetingRef, testimonialRef, contactRef} = ref;

  // Note that the flushSync call is necessary to force React to update the DOM before the scroll.

  

  console.log('the 3rd ref', ref);


  return(
    <>

      <li key={1}>
        <Link to={ROOT} onClick={scrollToTop}>
          Home
        </Link>
      </li>
      <li key={2}> <Link ref={welcomeRef} > Welcome To PTM</Link></li>
      <li key={3}> <Link ref={meetingRef} onClick={() => { flushSync(() => {

        ref.current.scrollIntoView( {
          behavior: 'smooth', 
          left: 0,
          top: ref.current.offsetTop,
          inline: 'start'
        });

      });}}>Our Meetings</Link></li>
      <li key={4}><Link ref={testimonialRef}>Testimonials</Link></li>
      <li key={5}><Link ref={contactRef} >Contact</Link></li>
      <li key={6}><Link to={MEETPTM} >
          Meet PTM
      </Link>       </li>
      <li key={7}><Link to={RESOURCES} >
          Resources
      </Link>      </li>
      <li key={8}> <Link to={FAQQ} >
          FAQ
      </Link>
      </li>
    </>
  );
};

const Links = React.forwardRef(forwardLinks);


export default Links;