import React from 'react'
import About from '../landing/about/about'
import Jumbotron from './jumbo/jumbotron'
import Process from './process/process'
import { QuoteOne } from './quotes/quotations'
import Testimonials from '../landing/testimony/testimonial'
import Content from '../../components/utils/layout'

function Landing() {
    return (
        <>
            <Content>
                <Jumbotron />
                <QuoteOne/>
                <About />
                <Process/>
                <Testimonials />
            </Content>
        </>
    )
}
export default Landing
