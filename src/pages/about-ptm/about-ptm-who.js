import React, { useEffect, useState } from 'react'
import './about-who.css'
import collage from '../../images/ptmcollage.png'

export default function AboutPTMWho() {
    const [mobileMenu, setMobileMenu] = useState(false)
    const mobileView = () => {
        if (window.innerWidth <= 950) {
            setMobileMenu(true)
        } else {
            setMobileMenu(false)
        }
    }

    useEffect(() => {
        mobileView()
        window.addEventListener('resize', mobileView)
    }, [])
    return (
        <>
            <main className="about-ptm-who-body">
                {mobileView ? (
                    <img className="about-ptm-who-img" src={collage} />
                ) : (
                    <div />
                )}

                <p className="about-ptm-who-text">
                    {' '}
                    Established in 2017 , Paddinton Toastmasters has always been
                    a home for public speaking excellence, personal development
                    and loads of fun. Based on the ground floor of the
                    Westbourne Park Baptist Church, we transform what is usually
                    a quiet space, into a homely yet energetic space to hold out
                    meetings. Since the easing of lockdown, we have successfully
                    been able to manage and run hybrid meetings to cater to the
                    various needs of our guests in person and online.
                    <p />
                    <br />
                    <p>
                        Our members come from a number of walks of life, from
                        small business owners, to software developers, to
                        consultants to teachers! Our mutual goal to become
                        public speaking masters in our own right is what binds
                        us together as a club.
                    </p>
                    <br />
                    <p>
                        Our meetings comprise of two halves, the first the home
                        of prepared speeches and the second, an opportunity for
                        members and guests to improve thier impromtu speaking
                        ability. As per the Toastmasters way, all speeches are
                        given feedback so our members continually improve. And
                        this is all captured in the Toastmasters Educational
                        program, Pathways that on becoming a member, access is
                        granted.
                    </p>
                    <br />
                    <h2>Come check us out! </h2>
                    <p>
                        Paddington Toastmasters meet every 1st and 3rd Tuesday
                        of the Month 18.00 for 18.15 start, 19.30 finish{' '}
                    </p>
                    <br />
                    We do hope to welcome you to a meeting in the near future
                    and show you in person why Paddington Toastmasters really is
                    A Club Like No Other!
                </p>
            </main>
        </>
    )
}