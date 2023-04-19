import React from 'react'
import './quotations.css'


function quoteRender({index, quoteObject }) {
    return (
<>
        {quoteObject.map((item) => (
                                <div className="rectangle">
            <blockquote className="blockquote">
                <p className="">
                    {item.quote}
                    “Speech is power: speech is to persuade, to convert, to
                    compel."
                </p>
            <figcaption>
                    {' '}
                    <cite title="Source Title">Ralph Waldo Emerson {item.author} </cite>
                </figcaption>
            </blockquote>
            </div>
        ))}
            </>

    )
}
export function QuoteOne() {
    return (
        <>


        </>
    )

}

export function QuoteTwo() {
    return (
        <>

            <div className="rectangle">
                <blockquote className="blockquote text-center">
                    <p className="mb-0">
                        “All speaking is public speaking, whether it’s to one
                        person or a thousand."
                    </p><figcaption>
                        <cite title="Source Title">Roger Love </cite>
                    </figcaption>
                </blockquote>
            </div>

        </>
    )
}

export function QuoteThree() {
    return (
        <>

            <div className="rectangle">
                <blockquote className="blockquote text-center">
                    <p >
                        “If you’re not comfortable with public speaking – and nobody starts out comfortable; <br/> you have to learn how to be comfortable – practice. "
                    </p>
                    <figcaption className="blockquote-footer">
                        {' '}
                        <cite title="Source Title">Hilary Clinton </cite>
                    </figcaption>
                </blockquote>
            </div>

        </>
    )
}
