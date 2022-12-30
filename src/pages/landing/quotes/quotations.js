import React from 'react'
import './quotations.css'

export function QuoteOne() {
    return (
        <>
            <div className="top-triangle"></div>
            <div className="rectangle">
                <blockquote className="blockquote">
                    <h1 className="mb-0">
                        “Speech is power: speech is to persuade, to convert, to
                        compel."
                    </h1>
                    <footer className="blockquote-footer">
                        {' '}
                        <cite title="Source Title">Ralph Waldo Emerson </cite>
                    </footer>
                </blockquote>
            </div>
            <div className="down-triangle"></div>
        </>
    )
}

export function QuoteTwo() {
    return (
        <>
            <div className="top-triangle"></div>
            <div className="rectangle">
                <blockquote className="blockquote text-center">
                    <h1 className="mb-0">
                        “All speaking is public speaking, whether it’s to one
                        person or a thousand."
                    </h1>
                    <footer className="blockquote-footer">
                        {' '}
                        <cite title="Source Title">Roger Love </cite>
                    </footer>
                </blockquote>
            </div>
            <div className="down-triangle"></div>
        </>
    )
}

export function QuoteThree() {
    return (
        <>
            <div className="top-triangle"></div>
            <div className="rectangle">
                <blockquote className="blockquote text-center">
                    <h1 className="mb-0">
                        “If you’re not comfortable with public speaking – and nobody starts out comfortable; <br/> you have to learn how to be comfortable – practice. "
                    </h1>
                    <footer className="blockquote-footer">
                        {' '}
                        <cite title="Source Title">Hilary Clinton </cite>
                    </footer>
                </blockquote>
            </div>
            <div className="down-triangle"></div>
        </>
    )
}
