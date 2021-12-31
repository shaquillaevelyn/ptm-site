import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Landing from './pages/landing/landing'
import FAQ from './pages/faq/faq'
import AboutPTM from './pages/about-ptm/about-ptm'
import AboutPTMWho from './pages/about-ptm/about-ptm-who'
import AboutPTMCovid from './pages/about-ptm/about-ptm-covid'
import AboutPTMCommittee from './pages/about-ptm/about-ptm-commitee'
import AboutPTMPathways from './pages/about-ptm/about-ptm-pathways'

import {
    ROOT,
    ABOUT,
    ABOUT_WHO,
    ABOUT_COVID,
    ABOUT_COMMITTEE,
    ABOUT_PATHWAYS,
    FAQQ,
    PRIVACY,
} from '../src/components/utils/routes'

import reportWebVitals from './reportWebVitals'
import PrivacyPolicy from './pages/privacy/privacy-policy'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename="/">
            <Header />
            <Routes>
                <Route exact path={ROOT} element={<Landing />} />
                <Route path={ABOUT} element={<AboutPTM />}>
                    <Route path={ABOUT_WHO} element={<AboutPTMWho />} />
                    <Route path={ABOUT_COVID} element={<AboutPTMCovid />} />
                    <Route
                        path={ABOUT_COMMITTEE}
                        element={<AboutPTMCommittee />}
                    />
                    <Route
                        path={ABOUT_PATHWAYS}
                        element={<AboutPTMPathways />}
                    />
                </Route>
                <Route path={FAQQ} element={<FAQ />} />
                <Route path={PRIVACY} element={<PrivacyPolicy />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
