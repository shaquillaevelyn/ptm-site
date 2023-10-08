import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Turn as Hamburger } from 'hamburger-react';
import * as URL from '../utils/routes';
import './header.css';
import MenuModal from './menu/menu.jsx';
import Anchor from './anchor/anchor';

// menu links
  const menuArray = [
    { title: 'Home', url: URL.ROOT },
      { title: 'Welcome to PTM', url: 'Welcome to PTM' },
      { title: 'Our Meetings', url: 'Our Mettings' },
      { title: 'Testimonials', url: 'Testimonials' },
      { title: 'Contact Us', url: 'Contact Us' },
    // { title: 'About PTM', url: URL.ROOT },
    // { title: 'Resources', url: URL.ROOT },
    { title: 'FAQ', url: URL.FAQQ },

  ];

export default function Header({itemName, selected}) {
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

  // use effect to active the component resize
  useEffect(() => {
    mobileView();
    window.addEventListener('resize', mobileView);
  }, []);


  // page section anchor
  const [anchorLink, setAnchorlink] = useState(null);

  useEffect(() => {
    setAnchorlink(document.getElementById(itemName))
  }, [itemName])

  const click = (e) =>  {
    e.preventDefault();
    anchorLink.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="navbar">
      
      <Anchor />

      <div className="navbar-menu">
        {mobileMenu ? (
          <>
            <Hamburger toggled={hidden} toggle={setHidden} label="Show menu" aria />
            <MenuModal hidden={!hidden} onClick={onClick} />
          </>
        ) : (
          <nav className="menu header-menu">
            <ul>
              {menuArray.map((item) => (
                <li>
                  <Link to={item.url} href={`#${itemName}`} className={selected}>
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
