import React, {useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { landingScroll } from './scroll';

export const ROOT = '/';
export const MEETPTM = '/meet-ptm';
export const RESOURCES = '/resources';
export const FAQQ = '/faq';
export const PRIVACY = '/privacy-policy';



export default function Links({refs}){


  const landingScroll = (ref) => {
    console.log('Triggered.');
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };

  return(
    <>
      <li key={1}>
        <Link to={ROOT} >
          Home
        </Link>
      </li>
      <li key={2}>
        <a to={'/welcome-to-PTM'} onClick={() => {landingScroll(ref.current);}}> Welcome To PTM</a>
      </li>
      <li key={3}> <a to={'/our-meetings'} onClick={() => {landingScroll(ref.current);}}>Our Meetings</a>      </li>
      <li key={4}><a to={'/testimonials'} onClick={() => {landingScroll(ref.current);}}>Testimonials</a>      </li>
      <li key={5}><a to={'/contact'} onClick={() => {landingScroll(ref.current);}}>Contact</a></li>
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
}