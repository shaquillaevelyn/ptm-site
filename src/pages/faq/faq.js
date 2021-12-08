import React, { useState } from 'react'
import showPlus from '../../images/showPlus.png'
import hideMinus from '../../images/hideMinus.png'
import { css } from '@emotion/css'

export default function FAQ() {
    const [show, setShow] = useState(false)
    const handler = () => setShow(!show)

    const FAQArray = [
        {
            question: 'When do you meet?',
            answer: ' test test',
        },
        {
            question:
                "I'm shy, nervous and not yet comfortable public speaking! Do I have to speak in the meeting?",
            answer: ' test test',
        },
        {
            question: 'How much is membership?',
            answer: ' test test',
        },
        {
            question: 'What do I recieve as a member?',
            answer: ' test test',
        },
        {
            question: 'Can Toastmasters help my career/professional life?',
            answer: ' test test',
        },
        {
            question: 'Where can I ask further questions?',
            answer: ' test test',
        },
    ]
    return (
        <>
            <div
                className={css`
                    min-height: 70vh;
                    margin-left: 20vw;
                    margin-right: 20vw;
                    font-family: Source Sans Pro;
                    font-weight: 400;
                    font-size: 1.25rem;
                `}
            >
                <h1>Frequently Asked Questions</h1>
                <h3>
                    Do you have a burning question? Check out our most
                    frequently asked questions
                </h3>

                <h4>
                    Question not here? &#160;
                    <span>
                        Click{' '}
                        <span>
                            <a
                                href="mailto:janetfmmilnes@gmail.com?subject=I%20have%20a%20question%20about%20PTM%20"
                                className={css`
                                    text-decoration: none;
                                    color: #772432;
                                `}
                            >
                                here
                            </a>{' '}
                        </span>{' '}
                        to send it to our committee
                    </span>
                </h4>

                <div
                    className={css`
                        padding-top: 20px;
                    `}
                >
                    {FAQArray.map((item) => (
                        <>
                            <div
                                className={css`
                                    padding-top: 25px;
                                    padding-right: 5px;
                                    display: inline-flex;
                                `}
                            >
                                <ShowReveal
                                    show={show}
                                    onClick={handler}
                                    setShow={setShow}
                                />
                                <h3>{item.question}</h3>
                            </div>
                            {/* 
                            so. hidden to call handler*/}

                            <p hidden={show}>{item.answer}</p>
                            <hr />
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export const ShowReveal = () => {
    const [show, setShow] = useState(false)
    const handler = () => setShow(!show)
    return (
        <>
            <div
                onClick={handler}
                className={css`
                    padding-top: 25px;
                    padding-right: 5px;
                    display: inline-flex;
                `}
            >
                {show === true ? (
                    <img src={showPlus} height="30px" />
                ) : (
                    <img src={hideMinus} height="30px" />
                )}
            </div>
        </>
    )
}
