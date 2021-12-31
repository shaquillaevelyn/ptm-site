import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Landing from './pages/landing/landing'
import FAQ from './pages/faq/faq'
import AboutPTM from './pages/about-ptm/about-ptm'

import {
    ROOT,
    ABOUT,
    MEMBERSHIP,
    PATHWAYS,
    FAQQ,
    PRIVACY,
} from '../src/components/utils/routes'
import reportWebVitals from './reportWebVitals'
import PrivacyPolicy from './pages/privacy/privacy-policy'

ReactDOM.render(
    <React.StrictMode>
        <hashHistory basename="/">
            <Header />
            <Routes>
                <Route exact path={ROOT} element={<Landing />} />
                <Route path={ABOUT} element={<AboutPTM />} />
                <Route path={MEMBERSHIP} element={<Landing />} />
                <Route path={PATHWAYS} element={<Landing />} />
                <Route path={FAQQ} element={<FAQ />} />
                <Route path={PRIVACY} element={<PrivacyPolicy />} />
            </Routes>
            <Footer />
        </hashHistory>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
