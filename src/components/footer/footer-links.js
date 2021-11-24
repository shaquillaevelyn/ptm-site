import React, { useState } from 'react'
import toastmastersColor from '../../images/toastmastersColor.png'
import useWindowSize from '../utils/useWindowSize'
import question from '../../images/customer-service.png'
import { QueryButton } from '../buttons/join-button'
import { JoinButton } from '../buttons/join-button'

export function PTMFooter() {
    return (
        <>
            <div className="section centreInDiv">
                <img alt="tmi" className="image" src={toastmastersColor}></img>
                <h4>
                    Paddington Toastmasters<br></br>
                    Club Number: 4495118
                </h4>
                <JoinButton />
            </div>
        </>
    )
}

function ListRender({ listarray }) {
    return (
        <div>
            {listarray.map((item) => (
                <li>
                    <a href={item.url}>{item.title}</a>
                </li>
            ))}
        </div>
    )
}

function SectionComponent({ header, content }) {
    const [show, setShow] = useState(false)

    return (
        <>
            <div className="section">
                <div>
                    {
                        <h4
                            onClick={() => {
                                setShow(!show)
                            }}
                        >
                            {header}
                        </h4>
                    }
                </div>

                <div hidden={!show}>
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
                { title: 'About PTM', url: 'www.google.com ' },
                { title: 'Membership', url: 'www.google.com ' },
            ],
        },
        {
            header: 'Legal',
            content: [{ title: 'Privacy Policy', url: 'www.google.com' }],
        },
        {
            header: 'Social',
            content: [
                { title: 'Toastmasters International', url: 'www.google.com ' },
                { title: 'LinkedIn', url: 'www.google.com ' },
                { title: 'Eventbrite', url: 'www.google.com ' },
            ],
        },
    ]

    const { width } = useWindowSize()

    if (window.innerWidth < 925) {
        return (
            <div>
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
                                <h4>{item.header}</h4>
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
            <div className="section centreInDiv">
                <img src={question} className="image" alt="question-logo"></img>{' '}
                <h3>Any questions or queries?</h3>
                <QueryButton />
                <p>A member of our committe will get back to you ASAP</p>
            </div>
        </>
    )
}
