import React from 'react'
import { Outlet } from 'react-router-dom'
import logo from '../../images/ptm-logo-black-small-transparent.svg'
import AboutPTMNav from './about-ptm-nav'
import './about-ptm.css'

const slogan = "Paddington Toastmasters - a club like no other"

export default function AboutPTM() {
    return (
        <>
            <div className="about-ptm-nav">
            <div>
                <img src={logo} alt={slogan}/>
            
                    <AboutPTMNav />
                </div>
            </div>
            <div className="about-ptm-body">
                <Outlet />
            </div>
        </>
    )
}
