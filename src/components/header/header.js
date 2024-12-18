/* eslint-disable react/display-name */
import React, { useState, useEffect} from 'react';
import { Turn as Hamburger } from 'hamburger-react';
import Links from '../utils/routes';
import './header.css';
import MenuModal from './mobile/menu.jsx';
import Anchor from './anchor/anchor';


export default function Header(){

  // switch to hamburger menu
  const [hidden, setHidden] = useState(false);
  const onClick = () => setHidden(!hidden);

  const [mobileMenu, setMobileMenu] = useState(false);
  const mobileView = () => {
    if (window.innerWidth <= 1550) {
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



  return (
    <>
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
              <Links/>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

