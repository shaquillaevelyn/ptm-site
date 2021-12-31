import React from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'
import * as ROUTE from '../../components/utils/routes'
import AboutPTMNav from './about-ptm-nav'
import AboutPTMWho from './about-ptm-who'
import './about-ptm.css'

export default function AboutPTM() {
    return (
        <>
            <div className="about-ptm-nav">
                <div>
                    <h1>Paddinton Toastmasters</h1>
                    <h2>A Club Like No Other</h2>
                    <AboutPTMNav />

                    <Routes>
                        <Route path={ROUTE.ABOUT} element={<AboutPTM />}>
                            <Route
                                path={ROUTE.ABOUT_WHO}
                                element={<AboutPTMWho />}
                            />
                            <Route
                                path={ROUTE.ABOUT_COVID}
                                element={<p>covid</p>}
                            />
                            <Route
                                path={ROUTE.ABOUT_COMMITTEE}
                                element={<p>committee</p>}
                            />
                            <Route
                                path={ROUTE.ABOUT_PATHWAYS}
                                element={<p>pathways</p>}
                            />
                        </Route>
                    </Routes>
                </div>
            </div>
            <div className="about-ptm-body">
                <Outlet />
            </div>
        </>
    )
}
