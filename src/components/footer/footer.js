import React from 'react'
import './footer.css'

import {
    ContactFooter,
    ExternalLinks,
    FooterComp,
    PTMFooter,
} from './footer-links'


export default function Footer() {
    return (
        <>
            <div className="footer">
                <PTMFooter />
                <div className="usefulLinks">
                <FooterComp />
                <ExternalLinks />
                </div>
                <ContactFooter />
            </div>
        </>
    )
}
