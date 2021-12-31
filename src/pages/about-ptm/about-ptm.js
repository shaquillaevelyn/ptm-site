import React from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'
import * as ROUTE from '../../components/utils/routes'
import AboutPTMNav from './about-ptm-nav'
import AboutPTMWho from './about-ptm-who'
import AboutPTMCovid from './about-ptm-covid'
import AboutPTMCommittee from './about-ptm-commitee'
import AboutPTMPathways from './about-ptm-pathways'
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
