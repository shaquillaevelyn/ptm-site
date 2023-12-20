/* eslint-disable react/display-name */
import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from './scroll';

export const ROOT = '/';
export const MEETPTM = '/meet-ptm';
export const RESOURCES = '/resources';
export const FAQQ = '/faq';
export const PRIVACY = '/privacy-policy';


export default function Links() {

  const LandingNavArray = [
    { title: 'Welcome to PTM', id:'landing-welcome', to: ROOT, key: 1},
    { title: 'Our Meetings', id:'landing-meeting', to: ROOT, key: 2},
    { title: 'Testimonials', id:'landing-testimonial', to: ROOT, key: 3},
    { title: 'Contact Us', id:'landing-contact', to: ROOT, key: 4},
    { title: 'FAQ', to: FAQQ}

  ];

  const landingNavs = (content) => {

    const scrollingLocation = document.getElementById(content.id);

    const handleClickNav = () => {
      document.getElementById(content.id).scrollTo({ top: 100, behavior: 'smooth' });
    };

    
    return(
      <li key={content.key}>
        <Link onClick={handleClickNav} to={content.to}>{content.title}</Link>
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

        {/* {PageNavArray.map(nav => pageNavs(nav))} */}
      </ul>
    </>
  );
}
