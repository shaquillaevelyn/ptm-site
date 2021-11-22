import React from 'react'
import toastmastersColor from '../../images/toastmastersColor.png'
import toastmasterslogowhite from '../../images/toastmasterslogowhite.png'
import MailToJoin from '../buttons/join-button'
import { JoinButton } from '../buttons/join-button'
import './header.css'

export default function Header() {
    return (
        <>
            <div className="header">
                <img
                    className="header-image"
                    alt="white tmi logo"
                    src={toastmastersColor}
                ></img>
                <span className="typography">Paddington Toastmasters</span>

                <div className="header-info">
                    <p>
                        Meetings 1st and 3rd Tuesday <br></br>of the Month
                    </p>
                    <JoinButton />
                </div>
            </div>
        </>
    )
}
