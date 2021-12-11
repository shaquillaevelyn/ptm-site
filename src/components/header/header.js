import React, { useState, useEffect } from 'react'
import * as URL from '../utils/routes'
import toastmastersColor from '../../images/toastmastersColor.png'
import { Link } from 'react-router-dom'
import { Turn as Hamburger } from 'hamburger-react'
import './header.css'
import MenuModal from './menu/menu'
import { useModal } from './menu/useModal-hook'


export default function Header({}) {

    const [hidden, setHidden]= useState(false)
    const onClick = () => setHidden(!hidden)

    const [mobileMenu, setMobileMenu] = useState(false)
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
                <Link to={URL.ROOT}>
                    <img
                        className="logo-image"
                        alt="white tmi logo"
                        src={toastmastersColor}
                    ></img></Link>
                    <span className="typography">
                        Paddington <br />
                        Toastmasters
                    </span>
                </div>

                <div className="navbar-menu">
                    {mobileMenu ? (
                        <>

                        <Hamburger toggled={hidden} toggle={setHidden}/>
                        <MenuModal hidden={!hidden} onClick={onClick}/>
            
                        </>
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
