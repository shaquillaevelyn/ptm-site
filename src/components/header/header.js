import React from 'react'
import toastmastersColor from '../../images/toastmastersColor.png'
import Menu from '../menu/menu'
import toastmasterslogowhite from '../../images/toastmasterslogowhite.png'
import MailToJoin from '../buttons/join-button'
import { JoinButton } from '../buttons/join-button'
import './header.css'

export default function Header() {
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

                {/* <div className="header-info">
                    <p>
                        Meetings 1st and 3rd Tuesday <br />
                        of the Month
                        <br />
                        8.00 for 18.15 start, 19.30 finish
                        <br />
                        Westbourne Park Baptist Church, London W2 5DX <br /> and
                        Zoom
                    </p>
                </div> */}

                <Menu />
            </div>
        </>
    )
}
