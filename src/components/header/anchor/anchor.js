import React from 'react';
import { Link } from 'react-router-dom';
import * as URL from '../../utils/routes';
import toastmastersColor from '../../../images/toastmastersColor.png';
import ptmLogo from '../../../images/ptm-logo-white-small-transparent.svg';
import './anchor.css';

export default function Anchor() {
  return (
    <div className="navbar-logo">
      <Link to={URL.ROOT}>
        <img
          className="logo-image"
          alt="white tmi logo"
          src={toastmastersColor}
        />
      </Link>

      <img
        className="ptm-logo-text hidden"
        alt="white ptm text"
        src={ptmLogo}
      />
    </div>
  );
}
