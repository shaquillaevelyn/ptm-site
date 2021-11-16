import React from 'react'
import toastmasterslogowhite from '../../images/toastmasterslogowhite.png'
import { JoinButton } from '../buttons/join-button'
import './header.css'

export default function Header() {
    return (
        <>
            <div className="header">
                <img
                    className="header-image"
                    alt="white tmi logo"
                    src={toastmasterslogowhite}
                ></img>
                <span className="typography">Paddington Toastmasters</span>
                {/* <JoinButton
                    label="Write me an E-Mail"
                    mailto="mailto:no-reply@example.com"
                /> */}
            </div>
        </>
    )
}
