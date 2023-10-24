/* eslint-disable react/display-name */
import React, { useState, useEffect, useRef, forwardRef} from 'react';

import { Turn as Hamburger } from 'hamburger-react';
import Links from '../utils/routes';
import './header.css';
import MenuModal from './mobile/menu.jsx';
import Anchor from './anchor/anchor';


const Header = forwardRef(function Header(props, ref){


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

  // console.log('the 2nd ref', props.refArray.welcomeRef);
  

  // console.log('ref-loco2', refArray.ref1);
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
              <ul >
                <Links ref={ref} props={props.refArray} refArray/>
              </ul>
            </nav>
          )}
        </div>
      </header>
    </>
  );
});

export default Header;
