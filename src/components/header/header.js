import React, { useState, useEffect } from 'react'
import * as URL from '../utils/routes'
import toastmastersColor from '../../images/toastmastersColor.png'
import { Link } from 'react-router-dom'
import { Turn as Hamburger } from 'hamburger-react'
import './header.css'

export default function Header() {
    const [mobileMenu, setMobileMenu] = useState(false)

    // mobile view sets setMobileMenu to ture or false depending on screen size
    const mobileView = () => {
        if (window.innerWidth <= 950) {
            setMobileMenu(true)
        } else {
            setMobileMenu(false)
        }
    }

    // use effect
    useEffect(() => {
        mobileView()
        window.addEventListener('resize', mobileView)
    }, [])

    const menuArray = [
        { title: 'Home', url: URL.ROOT },
        { title: 'About PTM', url: URL.ABOUT },
        { title: 'FAQ', url: URL.FAQQ },
    ]

    return (
        <>
            <div className="navbar">
                <div className="navbar-logo">
                    <img
                        className="logo-image"
                        alt="white tmi logo"
                        src={toastmastersColor}
                    ></img>
                    <span className="typography">
                        Paddington <br />
                        Toastmasters
                    </span>
                </div>

                <div className="navbar-menu">
                    {mobileMenu ? (
                        <Hamburger />
                    ) : (
                        <nav className="menu header-menu">
                            {menuArray.map((item) => (
                                <li>
                                    <Link to={item.url}>{item.title}</Link>
                                </li>
                            ))}
                        </nav>
                    )}
                </div>
            </div>
        </>
    )
}
