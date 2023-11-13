/* eslint-disable react/display-name */
import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from './scroll';

export const ROOT = '/';
export const MEETPTM = '/meet-ptm';
export const RESOURCES = '/resources';
export const FAQQ = '/faq';
export const PRIVACY = '/privacy-policy';


export default function Links() {

  const LandingNavArray = [
    { title: 'Welcome to PTM', id:'landing-welcome'},
    { title: 'Our Meetings', id:'landing-meeting'},
    { title: 'Testimonials', id:'landing-testimonial'},
    { title: 'Contact Us', id:'landing-contact'},
  ];

  const PageNavArray = [
    { title: 'Meet PTM', to: MEETPTM},
    { title: 'Resources', to: RESOURCES},
    { title: 'FAQ', to: FAQQ}
  ];


  const landingNavs = (content) => {

    const scrollingLocation = content.id;

    const handleClickNav = () => {
      document.getElementById(scrollingLocation).scrollIntoView({ behavior: 'smooth' });
    };

    return(
      <li key={content.key}>
        <Link onClick={handleClickNav}>{content.title}</Link>
      </li>
    );
  };



  const pageNavs = (content) => {

    return(
      <li>
        <Link to={content.to}>{content.title}</Link>
      </li>
    );
  };


  return( 
    <>
      <ul>
        <li>
          <Link to={ROOT} onClick={scrollToTop}>
          Home
          </Link>
        </li>
        {LandingNavArray.map(nav => landingNavs(nav))}

        {PageNavArray.map(nav => pageNavs(nav))}
      </ul>
    </>
  );
}
