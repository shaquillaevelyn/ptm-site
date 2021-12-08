import React, { useState } from 'react'
import toastmastersColor from '../../images/toastmastersColor.png'
import { QueryButton } from '../buttons/join-button'
import { JoinButton } from '../buttons/join-button'
import {
    ROOT,
    ABOUT,
    MEMBERSHIP,
    PATHWAYS,
    FAQQ,
    PRIVACY,
} from '../../components/utils/routes'
import { Link, Router } from 'react-router-dom'

export function PTMFooter() {
    return (
        <>
            <div className="section centreInDiv ptm-details one">
                <img alt="tmi" className="image" src={toastmastersColor}></img>
                <h4>
                    Paddington Toastmasters<br></br>
                    Club Number: 4495118
                </h4>
            </div>
        </>
    )
}

function ListRender({ index, listarray }) {
    return (
        <div>
            {listarray.map((item) => (
                <li key={index}>
                    <Link to={item.url}>{item.title}</Link>
                </li>
            ))}
        </div>
    )
}

function SectionComponent({ header, content }) {
    const [show, setShow] = useState(false)

    return (
        <>
            <div className="section menu-section two">
                <div>
                    {
                        <h5
                            onClick={() => {
                                setShow(!show)
                            }}
                        >
                            {header}
                        </h5>
                    }
                </div>

                <div hidden={show}>
                    <ListRender listarray={content} />
                </div>
            </div>
        </>
    )
}

export function FooterComp() {
    const FooterArray = [
        {
            header: 'Explorer',
            content: [
                { title: 'Home', url: ROOT },
                { title: 'About PTM', url: ABOUT },
                { title: 'Membership', url: MEMBERSHIP },
                { title: 'Pathways', url: PATHWAYS },
                { title: 'FAQ', url: FAQQ },
            ],
        },
        {
            header: 'Legal',
            content: [{ title: 'Privacy Policy', url: PRIVACY }],
        },
        {
            header: 'Social',
            content: [
                {
                    title: 'Toastmasters International',
                    url: 'www.toastmasters.org/Find-a-Club/04495118-04495118',
                },
                {
                    title: 'LinkedIn',
                    url: 'www.linkedin.com/company/paddingtontoastmasters',
                },
                {
                    title: 'Eventbrite',
                    url: 'www.eventbrite.co.uk/e/paddington-toastmaster-club-meeting-tickets-166138072447',
                },
            ],
        },
    ]

    if (window.innerWidth < 925) {
        return (
            <div className="mobile-section">
                {' '}
                {FooterArray.map((item) => (
                    <SectionComponent
                        header={item.header}
                        content={item.content}
                    />
                ))}
            </div>
        )
    } else {
        return (
            <>
                {FooterArray.map((item) => (
                    <>
                        <div className="section">
                            <div>
                                <h5>{item.header}</h5>
                            </div>

                            <div>
                                <SectionComponent content={item.content} />
                            </div>
                        </div>
                    </>
                ))}
            </>
        )
    }
}

export function ContactFooter() {
    return (
        <>
            <div className="section centreInDiv ptm-details three">
                <h5>Come to our next meeting!</h5>
                <JoinButton />
                <h5>Any questions or queries?</h5>
                <QueryButton />
                <p>A member of our committe will get back to you ASAP</p>
            </div>
        </>
    )
}
