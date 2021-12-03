import React, { useState } from 'react'

import { css } from '@emotion/css'

// function FAQListRender({ listarray }) {
//     return (
//         <div>
//             {listarray.map((item, index) => (
//                 <p key={index}>{item.answer}</p>
//             ))}
//         </div>
//     )
// }
// function FAQComp({ question, answer }) {
//     const [showAnswer, setShowAnswer] = useState(false)
//     return (
//         <>
//             <div>
//                 {
//                     <h3
//                         onClick={() => {
//                             setShowAnswer(!showAnswer)
//                         }}
//                     >
//                         {question}
//                     </h3>
//                 }

//                 <div hidden={showAnswer}>
//                     <FAQListRender listarray={answer} />
//                 </div>
//                 <hr />
//             </div>
//         </>
//     )
// }

export default function FAQ() {
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
                    margin-left: 30vh;
                    margin-right: 30vh;
                `}
            >
                <h1>Frequently Asked Questions</h1>
                <p>
                    Do you have a burning question? Check out our most
                    frequently asked questions
                </p>

                <h2>
                    Question not here?
                    <span>Click here to send it to our committee</span>
                </h2>

                <div>
                    {/* {FAQArray.map((item) => (
                        <FAQComp
                            answer={item.answer}
                            question={item.question}
                        />
                    ))} */}

                    {/* <FAQListRender FAQArray={FAQArray} /> */}
                    {FAQArray.map((item) => (
                        <>
                            <h3>{item.question}</h3>
                            <p hidden={true}>{item.answer}</p>
                            <hr />
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}
