import React from 'react'
import talk from '../../../images/new-landing-page.png'
import './about.css'
import { JoinButtonBig } from '../../../components/buttons/join-button'


export default function About() {
    return (
        <>
            <div className="about-body">
                <div className="text">
                    <h2>Public Speaking is NOT to be Feared</h2>
                    <h3>
                        It can be enjoyed and Paddington Toastmasters are here
                        to help!
                    </h3>
                    &#10; We are a lively and supportive club, ready to support
                    you as you build your confidence, public speaking and
                    communication skills.&#10; Whether you are a complete newbie
                    or a seasoned public speaker, you are welcome to join us at
                    our meetings where we can improve together.
                    <br />
                    <h4>Progress with us</h4>
                    We pride ourselves on creating a relaxed and informal
                    environment where you feel comfortable to participate and
                    most importantly, have a laugh while doing so.&#10; On
                    becoming a member, we offer mentorship and support as you
                    make your way through the Toastmasters International
                    Educational Program, Pathways.
                    <br />
                    <h4>Reap the Benefits </h4>
                    Help us to help you to Build Leadership Skills,Maximise your
                    Potential, in the workplace and beyond, and Enhance
                    Self-Awareness.
                    <br />
                    The benefits are endless.
                    <br />
                    <br />
                    We are waiting welcome you!
                    <br />
                    <br />
                    <div className='join-us'>
                    <JoinButtonBig />
                    </div>
                </div>

                <div>
                    <img src={talk} alt="talk "></img>
                </div>
            </div>
        </>
    )
}
