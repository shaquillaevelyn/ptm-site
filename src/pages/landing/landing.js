import React from 'react'
import About from '../landing/about/about'
import Jumbotron from './jumbo/jumbotron'
import Process from './process/process'
import { quoteArray, Quotation } from './quotes/quotations'

import Testimonials from '../landing/testimony/testimonial'
import Content from '../../components/utils/layout'


function Landing(   ) {


    return (
        <>
            <Content>
                <Jumbotron />
                <Quotation
                    id={quoteArray[1].id}
                    quote={quoteArray[1].quote}
                    author={quoteArray[1].author}
                />
                <About />
                <Quotation
                    id={quoteArray[2].id}
                    quote={quoteArray[2].quote}
                    author={quoteArray[2].author}
                />
                <Process />
                <Quotation
                    id={quoteArray[3].id}
                    quote={quoteArray[3].quote}
                    author={quoteArray[3].author}
                />
                <Testimonials />
            </Content>
        </>
    )
}
export default Landing
