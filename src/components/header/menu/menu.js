import React, { useState } from 'react'
import * as URL from '../../utils/routes'
import menu from '../../../images/menu.png'
import { css } from '@emotion/css'
import { Turn as Hamburger } from 'hamburger-react'
import { Link, Router } from 'react-router-dom'

export function HamburgerMenu() {
    const [display, setDisplay] = useState(false)
    return (
        <>
            <div className="hamburger">
                <Hamburger
                    onClick={() => {
                        setDisplay(!display)
                    }}
                    src={menu}
                />
            </div>
        </>
    )
}

export function MenuModal() {
    return (
        <>
            <div
                className={css`
                    background: orange;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    width: auto;
                `}
            ></div>
        </>
    )
}

export function MenuFunct() {
    const menuArray = [
        { title: 'Home', url: URL.ROOT },
        { title: 'About PTM', url: URL.ABOUT },
        { title: 'FAQ', url: URL.FAQQ },
    ]
    return (
        <nav className="menu">
            {menuArray.map((item) => (
                <li>
                    <Link to={item.url}>{item.title}</Link>
                </li>
            ))}
        </nav>
    )
}
