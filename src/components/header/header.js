import React, { useState, useEffect } from 'react'
import * as URL from '../utils/routes'
import toastmastersColor from '../../images/toastmastersColor.png'
import { Link } from 'react-router-dom'
import { Turn as Hamburger } from 'hamburger-react'
import './header.css'
import MenuModal from './menu/menu'
import Anchor from './anchor/anchor'

export default function Header() {
    const [hidden, setHidden] = useState(false)
    const onClick = () => setHidden(!hidden)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }


    const [mobileMenu, setMobileMenu] = useState(false)
    const mobileView = () => {
        if (window.innerWidth <= 950) {
            setMobileMenu(true)
        } else {
            setMobileMenu(false)
        }
    }

    // use effect to active the component resize
    useEffect(() => {
        mobileView()
        window.addEventListener('resize', mobileView)
    }, [])

    const menuArray = [
        { title: 'Home', url: URL.ROOT },
        { title: 'About PTM', url: URL.ABOUT_WHO },
        { title: 'FAQ', url: URL.FAQQ },
    ]

    return (
        <>

            <header className="navbar">
              <Anchor />

                <div className="navbar-menu">
                    {mobileMenu ? (
                        <>
                            <Hamburger toggled={hidden} toggle={setHidden} />
                            <MenuModal hidden={!hidden} onClick={onClick} />
                        </>
                    ) : (
                        <nav className="menu header-menu">
                            {menuArray.map((item) => (
                                <li>
                                    <Link onclick={scrollToTop} to={item.url}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </nav>
                    )}
                </div>
            </header>
        </>
    )
}
