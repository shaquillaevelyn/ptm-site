import React from 'react'
import './quotations.css'

const quoteArray = [
        {
            quote: 'Speech is power: speech is to persuade, to convert, to compel.',
            author: 'Ralph Waldo Emerson'
        },
    {
            quote: 'All speaking is public speaking, whether it’s to one person or a thousand.',
            author: 'Roger Love'

        },
    {
            quote: 'If you’re not comfortable with public speaking – and nobody starts out comfortable; you have to learn how to be comfortable – practice.',
            author: 'Hilary Clinton'
        },
]


export function QuoteOne({ index }) {

    return (
<>
        {quoteArray.map((item) => (
            <div className="rectangle margin-section-lg" key={index}>
                <blockquote className="blockquote ">
                    <p className="body-text-xlg">
                        "{item.quote}"
                    </p>
                <figcaption>
                        {' '}
                        <cite title="Source Title"> {item.author} </cite>
                    </figcaption>
                </blockquote>
            </div>
        ))}
            </>

    )
}

// export function QuoteOne() {
//     return (
//         <>


//         </>
//     )

// }

// export function QuoteTwo() {
//     return (
//         <>

//             <div className="rectangle">
//                 <blockquote className="blockquote text-center">
//                     <p className="mb-0">

//                     </p><figcaption>
//                         <cite title="Source Title"> </cite>
//                     </figcaption>
//                 </blockquote>
//             </div>

//         </>
//     )
// }

// export function QuoteThree() {
//     return (
//         <>

//             <div className="rectangle">
//                 <blockquote className="blockquote text-center">
//                     <p >
//                         “ "
//                     </p>
//                     <figcaption className="blockquote-footer">
//                         {' '}
//                         <cite title="Source Title">Hilary Clinton </cite>
//                     </figcaption>
//                 </blockquote>
//             </div>

//         </>
//     )
// }
