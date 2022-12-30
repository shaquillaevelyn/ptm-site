import React from 'react'
import About from '../landing/about/about'
import Jumbotron from './jumbo/jumbotron'
import Process from './process/process'
// import OnLoadModal from '../../components/on-load-modal/on-load-modal'
import { QuoteOne, QuoteTwo, QuoteThree } from './quotes/quotations'
import Testimonials from '../landing/testimony/testimonial'
import Content from '../../components/utils/layout'

function Landing() {
    return (
        <>
            <Content>
                {/* <OnLoadModal /> */}
                <Jumbotron />
                <QuoteOne />
                <About />
                <QuoteTwo />
                <Process/>
                <QuoteThree />
                <Testimonials />
            </Content>
        </>
    )
}
export default Landing
