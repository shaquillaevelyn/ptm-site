import React from 'react'
import About from '../landing/about/about'
import Jumbotron from './jumbo/jumbotron'
import { QuoteOne, QuoteTwo } from './quotes/quote-1'

import Testimonials from '../landing/testimony/testimonial'
function Landing() {
    return (
        <>
            <Jumbotron />
            <QuoteOne />
            <About />
            <QuoteTwo />
            <Testimonials />
        </>
    )
}
export default Landing
