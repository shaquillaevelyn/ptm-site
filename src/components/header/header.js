import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Turn as Hamburger } from 'hamburger-react';
import * as URL from '../utils/routes';
import './header.css';
import MenuModal from './mobile/menu.jsx';
import Anchor from './anchor/anchor';

// menu links
const menuArray = [
  { title: 'Home', url: URL.ROOT, level: 1 },
  { title: 'Welcome to PTM', section: 'Welcome to PTM', level: 2},
  { title: 'Our Meetings', section: 'Our Meetings', level: 2 },
  { title: 'Testimonials', section: 'Testimonials', level: 2 },
  { title: 'Contact Us', section: 'Contact Us', level: 2 },
  // { title: 'About PTM', url: URL.ROOT },
  // { title: 'Resources', url: URL.ROOT },
  { title: 'FAQ', url: URL.FAQQ, level: 1 },

];

export default function Header(props, { itemName, selected}) {
  // switch to hamburger menu
  const [hidden, setHidden] = useState(false);
  const onClick = () => setHidden(!hidden);

  const [mobileMenu, setMobileMenu] = useState(false);
  const mobileView = () => {
    if (window.innerWidth <= 950) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
  };
  // switch to hamburger menu


  // use effect to active the component resize
  useEffect(() => {
    mobileView();
    window.addEventListener('resize', mobileView);
  }, []);


  // page section anchor
  //   const [anchorLink, setAnchorlink] = useState(null);

  //   useEffect(() => {
  //     setAnchorlink(document.getElementById(itemName))
  //   }, [itemName])

  //   const sectionScroll = (event) => {
  //  event.preventDefault();
  //        anchorLink.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }

  return (
    <header className="navbar">
      
      <Anchor />

      <div className="navbar-menu">
        {mobileMenu ? (
          <>
            <Hamburger toggled={hidden} toggle={setHidden} label="Show menu" aria />
            <MenuModal hidden={!hidden} onClick={onClick} menuArray={menuArray} />
          </>
        ) : (
          <nav className="menu header-menu">
            <ul>
              {menuArray.map((item) => (
                <li key={item.key}>
                  <Link to={item.url} anchorLink={itemName} className={selected} menuArray >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
