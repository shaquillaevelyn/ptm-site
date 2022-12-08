import React from 'react'
import * as URL from '../../utils/routes'
import toastmastersColor from '../../../images/toastmastersColor.png'
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
    <span className="typography">
        Paddington
        Toastmasters
    </span>
</div>
</>
    )
}