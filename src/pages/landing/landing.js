import React from 'react'
import About from '../landing/about/about'
import Jumbotron from './jumbo/jumbotron'
import PageUp from '../../components/pageup/pageup'
// import OnLoadModal from '../../components/on-load-modal/on-load-modal'
import { QuoteOne, QuoteTwo } from './quotes/quote-1'
import Stats from './stats/stats'
import Testimonials from '../landing/testimony/testimonial'
import Content from '../../components/utils/layout'
function Landing() {
    return (
        <>
            <Content>
                <PageUp />
                {/* <OnLoadModal /> */}
                <Jumbotron />
                <QuoteOne />
                <About />
                <QuoteOne />
                <Stats/>
                <QuoteTwo />
                <Testimonials />
            </Content>
        </>
    )
}
export default Landing
