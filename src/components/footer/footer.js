import React from 'react'

import {
    ContactFooter,
    ExternalLinks,
    FooterComp,
    PTMFooter,
} from './footer-links'
import './footer.css'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <PTMFooter />

                <FooterComp />
                <ExternalLinks />
                <ContactFooter />
            </div>
        </>
    )
}
