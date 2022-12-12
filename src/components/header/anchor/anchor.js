import React from 'react'
import * as URL from '../../utils/routes'
import toastmastersColor from '../../../images/toastmastersColor.png'
import ptmLogo from  '../../../images/ptm-logo-white-small-transparent.svg'
import { Link } from 'react-router-dom'
import './anchor.css'


export default function Anchor() {

    return(
        <>
    <div className="navbar-logo">
    <Link to={URL.ROOT}>
        <img
            className="logo-image"
            alt="white tmi logo"
            src={toastmastersColor}
        ></img>
    </Link>

    <img
            className="ptm-logo-text hidden"
            alt="white ptm text"
            src={ptmLogo}
        ></img>
</div>
</>
    )
}