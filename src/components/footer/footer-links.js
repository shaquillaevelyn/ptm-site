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

    const [show, setShow] = useState(false)
    const { width } = useWindowSize()

    if (window.innerWidth < 925) {
        return (
            <div>
                {' '}
                {FooterArray.map((item) => (
                    <>
                        <div className="section">
                            <div>
                                {setShow && (
                                    <h4
                                        onClick={() => {
                                            setShow && setShow(!show)
                                        }}
                                    >
                                        {item.header}
                                    </h4>
                                )}
                            </div>

                            <div hidden={show}>
                                <li>
                                    <a href={item.content[0].url}>
                                        {item.content[0].title}
                                    </a>
                                </li>
                            </div>
                        </div>
                    </>
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
                                <li>
                                    <a href={item.content[0].url}>
                                        {item.content[0].title}
                                    </a>
                                </li>
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
