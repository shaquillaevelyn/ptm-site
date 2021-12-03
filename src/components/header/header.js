import React, { useState, useEffect } from 'react'
import toastmastersColor from '../../images/toastmastersColor.png'
import { HamburgerMenu, MenuFunct } from './menu/menu'
import './header.css'

export default function Header() {
    const [width, setWindowWidth] = useState(0)

    useEffect(() => {
        updateDimensions()
        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    }

    console.log(width)

    const responsiveHeader = {
        showmenu: width > 950,
    }

    const responsiveHamburger = {
        showhamburger: width < 949,
    }
    return (
        <>
            <div className="header">
                <div className="one">
                    <img
                        className="header-image"
                        alt="white tmi logo"
                        src={toastmastersColor}
                    ></img>
                    <span className="typography">
                        Paddington <br />
                        Toastmasters
                    </span>
                </div>
            </div>

            <div className="header-menu" showmenu={responsiveHeader.showmenu}>
                <MenuFunct />
            </div>
            <div
                className="header-menu"
                showhamburger={responsiveHamburger.showhamburger}
            >
                <HamburgerMenu />
            </div>
        </>
    )
}
