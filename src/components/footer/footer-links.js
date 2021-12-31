import React, { useEffect } from 'react'
import toastmastersColor from '../../images/toastmastersColor.png'
import { QueryButton } from '../buttons/join-button'
import { JoinButton } from '../buttons/join-button'
import { ROOT, ABOUT, FAQQ, PRIVACY } from '../../components/utils/routes'
import { Link } from 'react-router-dom'

export function PTMFooter() {
    return (
        <>
            <div className="section centreInDiv ptm-details">
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
    const PageUp = () => {
        useEffect(() => {
            window.scrollTo(0, 0)
        }, [])
    }
    return (
        <div>
            {listarray.map((item) => (
                <li key={index}>
                    <Link onClick={PageUp} to={item.url}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </div>
    )
}

function SectionComponent({ header, content }) {
    return (
        <>
            <div className="section menu-section">
                <div>
                    <h5>{header}</h5>
                </div>

                <div>
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
                { title: 'FAQ', url: FAQQ },
            ],
        },
        {
            header: 'Legal',
            content: [{ title: 'Privacy Policy', url: PRIVACY }],
        },
    ]

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
export function ExternalLinks() {
    return (
        <div className="section">
            <h5>Social</h5>

            <li>
                <Link
                    target="_blank"
                    to={{
                        pathname:
                            'www.toastmasters.org/Find-a-Club/04495118-04495118',
                    }}
                >
                    Toastmasters International
                </Link>
            </li>
            <li>
                <a
                    target="_blank"
                    href="www.linkedin.com/company/paddingtontoastmasters"
                >
                    LinkedIn
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    href="www.eventbrite.co.uk/e/paddington-toastmaster-club-meeting-tickets-166138072447"
                >
                    Eventbrite
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    href="https://toastmasterclub.org/portal.php?page=3017"
                >
                    EasySpeak
                </a>
            </li>
        </div>
    )
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
