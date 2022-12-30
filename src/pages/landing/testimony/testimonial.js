import React from 'react'
import './testimonial.css'
import fedor from '../../../images/fedor.jpg'
import shaq from '../../../images/shaq-test.jpg'
import pippa from '../../../images/pippa.jpg'

export default function Testimonials() {
    return (
        <div className="testimony-text">
            <div style={{ textAlign: 'center' }}>
                <h1>Testimonials</h1>
                <h2>See some of the words from members and guests about Paddington Toastmasters </h2>
            </div>
            <div className="member-testimony">
                <div className="testimony">
                    <img src={shaq} alt="shaquilla"></img>
                    <p>
                        Joining Toastmasters 2 years ago has had such a postive
                        effect on me. I am a far more eloquent, competent and
                        creative speaker; and during the Covid-19 pandemic and
                        having all communications move to video calls, I have
                        become more flexible and versatile in my style. These
                        skills I know will be 100% applicable in our new normal!
                        Toastmasters has also allowed me to build in my
                        leadership potential. There is ample opprtuntiy to
                        develop yourself, develop others though mentorship and
                        develop your club to be the best that it could possibly
                        be, through being a part of the club committee.
                        Patiently, I wait for the pandemic to come to an end so
                        we can go back to in person meetings where I can see all
                        the smiling faces of my fellow members.
                    </p>{' '}
                    <cite title="Source Title">--Shaquilla </cite>
                </div>
                <div className="testimony">
                    <img src={fedor} alt="fedor"></img>
                    <p>
                        I have benefitted so much from being a member of
                        Toastmasters. Firstly, the skills I acquired gave me the
                        confidence to accept a job that required frequent public
                        speaking appearances. Secondly, I have gained evaluation
                        skills that now enable me to give constructive feedback
                        to others using a positive format that highlights points
                        for improvement in an acceptable, non-threatening way. I
                        have also had the pleasure over the years of meeting so
                        many interesting people from different walks of life. I
                        can warmly recommend Toastmasters as a great and
                        extremely cost-effective way to improve your public
                        speaking, communication skills and grow in
                        self-confidence.
                    </p>
                    <cite title="Source Title">--Fedor </cite>
                </div>
                <div className="testimony">
                    <img src={pippa} alt="pippa"></img>
                    <p>
                        {' '}
                        I am what you might call a “legacy” in that my mum was a
                        Toastmaster for many years. I am following in her
                        footsteps as well as forging my own path. For me, TM has
                        allowed me to practice speaking in a safe environment
                        and try out techniques that I might not have had the
                        courage to do on my own. The club members are so
                        supportive and encouraging that you feel free to try
                        things out and give it a go. I have learned that my
                        nerves before a speech can be harnessed as energy rather
                        than a roadblock, and I have learned that nervousness
                        just means I care and want to do my best. I still get
                        nervous but that’s perfectly normal– it’s how you
                        respond to it that matters. Even after many years of
                        being at Paddington TM, I am still learning new skills
                        and really enjoy the relaxed and fun spirit of our club
                    </p>
                    <cite title="Source Title">--Pippa </cite>
                </div>
            </div>
        </div>
    )
}
