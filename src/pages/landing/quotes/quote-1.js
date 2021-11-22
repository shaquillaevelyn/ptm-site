import React from 'react'
import './quote-1.css'

export function QuoteOne() {
    return (
        <>
            <div className="top-triangle"></div>
            <div className="rectangle">
                <blockquote class="blockquote">
                    <h1 class="mb-0">
                        “Speech is power: speech is to persuade, to convert, to
                        compel."
                    </h1>
                    <footer class="blockquote-footer">
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
                <blockquote class="blockquote text-center">
                    <h1 class="mb-0">
                        “All speaking is public speaking, whether it’s to one
                        person or a thousand."
                    </h1>
                    <footer class="blockquote-footer">
                        {' '}
                        <cite title="Source Title">Roger Love </cite>
                    </footer>
                </blockquote>
            </div>
            <div className="down-triangle"></div>
        </>
    )
}
