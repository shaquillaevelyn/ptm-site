import React, { useState, useEffect, useRef} from 'react';

import { Turn as Hamburger } from 'hamburger-react';
import Links from '../utils/routes';
import './header.css';
import MenuModal from './mobile/menu.jsx';
import Anchor from './anchor/anchor';


export default function Header({}) {

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

  // const welcomeRef = useRef(null);

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
              <ul>
                <Links />
              </ul>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
