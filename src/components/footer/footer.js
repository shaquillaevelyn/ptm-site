import React from 'react'
import {
    ContactFooter,
    ExploreFooter,
    LegalFooter,
    PTMFooter,
    SocialFooter,
} from './footer-links'
import './footer.css'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="section">
                    <PTMFooter />
                </div>

                <div className="section">
                    <ExploreFooter />
                </div>
                <div className="section">
                    <SocialFooter />
                </div>

                <div className="section">
                    <LegalFooter />
                </div>

                <div className="section">
                    <ContactFooter />
                </div>
            </div>
        </>
    )
}
