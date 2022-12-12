import React from 'react'
import { Outlet } from 'react-router-dom'
import AboutPTMNav from './about-ptm-nav'
import './about-ptm.css'

export default function AboutPTM() {
    return (
        <>
            <div className="about-ptm-nav">
                <div>
                    <h1>Paddinton Toastmasters</h1>
                    <h2>A Club Like No Other</h2>
                    <AboutPTMNav />
                </div>
            </div>
            <div className="about-ptm-body">
                <Outlet />
            </div>
        </>
    )
}
