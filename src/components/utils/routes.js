/* eslint-disable react/display-name */
import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from './scroll';
import { useRef } from 'react';

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
    { title: 'Join a Meeting', id:'landing-contact'},


  ];




  const landingNavs = (content) => {

    const scrollingLocation = content.id;

    const handleClickNav = () => {

      window.scrollTo({
        behavior: 'smooth',
        top:       document.getElementById(scrollingLocation).getBoundingClientRect().top -
        document.body.getBoundingClientRect().top - 150
      });
    };

    return(
      <li key={content.key}>
        <Link onClick={handleClickNav}>{content.title}</Link>
      </li>
    );
  };



  const PageNavArray = [
    { title: 'FAQ', to: FAQQ}
  ];

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
