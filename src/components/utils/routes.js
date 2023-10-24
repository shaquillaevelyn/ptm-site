/* eslint-disable react/display-name */
import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from './scroll';

export const ROOT = '/';
export const MEETPTM = '/meet-ptm';
export const RESOURCES = '/resources';
export const FAQQ = '/faq';
export const PRIVACY = '/privacy-policy';


const Links = forwardRef(function Links(props, ref) {


  function scrollToRef(div) {
    const map = getMap();
    const node = map.get(div);
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function contactScroll (){
    contactRef.current.scrollIntoView( {
      behavior: 'smooth', 
      left: 0,
      top: ref.current.offsetTop,
      inline: 'start'
    });
  };

  // console.log('the 3rd ref', props.refArray.meetingRef);


  return(
    <>


      <li key={1}>
        <Link to={ROOT} onClick={scrollToTop}>
          Home
        </Link>
      </li>
      <li key={2}> <Link ref={ref.welcomeRef}> Welcome To PTM</Link></li>
      <li key={3}> <Link ref={ref.meetingRef}>Our Meetings</Link></li>
      <li key={4}><Link ref={ref.testimonialRef}>Testimonials</Link></li>
      <li key={5}><Link ref={ref.contactRef} >Contact</Link></li>
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
});

export default Links;