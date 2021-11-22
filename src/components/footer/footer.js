import React from 'react'

import { ContactFooter, FooterComp, PTMFooter } from './footer-links'
import './footer.css'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="section">
                    <PTMFooter />
                </div>

                <FooterComp />

                <div className="section">
                    <ContactFooter />
                </div>
            </div>
        </>
    )
}
