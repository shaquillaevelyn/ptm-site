import React from 'react'
import * as ROUTE from '../../components/utils/routes'
import { Link } from 'react-router-dom'
import './about-ptm-nav.css'

export default function AboutPTMNav() {
    const AboutPTMNavArray = [
        { title: 'Who we are', url: ROUTE.ABOUT_WHO },
        { title: 'Covid-19', url: ROUTE.ABOUT_COVID },
        { title: 'Committee', url: ROUTE.ABOUT_COMMITTEE },
        { title: 'Pathways', url: ROUTE.ABOUT_PATHWAYS },
    ]

    return (
        <>
            <nav className="about-ptm-nav">
                {AboutPTMNavArray.map((item) => (
                    <nav>
                        <Link to={item.url}>{item.title}</Link>
                    </nav>
                ))}
            </nav>
        </>
    )
}
