import React from 'react'

import { ContactFooter, FooterComp, PTMFooter } from './footer-links'
import './footer.css'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <PTMFooter />

                <FooterComp />

                <ContactFooter />
            </div>
        </>
    )
}