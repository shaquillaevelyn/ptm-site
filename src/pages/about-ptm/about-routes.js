import React from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'
import * as ROUTE from '../../components/utils/routes'
import AboutPTMWho from './about-ptm-who'
import AboutPTM from './about-ptm'

const AboutRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={ROUTE.ABOUT} element={<AboutPTM />}>
                    <Route path={ROUTE.ABOUT_WHO} element={<AboutPTMWho />} />
                    <Route path={ROUTE.ABOUT_COVID} element={<p>covid</p>} />
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

            <div className="about-ptm-body">
                <Outlet />
            </div>
        </>
    )
}

export default AboutRoutes
