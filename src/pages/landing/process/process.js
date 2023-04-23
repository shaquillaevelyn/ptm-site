import React from 'react'
import './process.css'
import one from '../../../images/1.png'
import two from '../../../images/2.png'
import three from '../../../images/3.png'
import four from '../../../images/4.png'
import { JoinButtonBig } from '../../../components/buttons/join-button'



export default function Process() {


    return (
        <>
        <section className='margin-section-lg'>
        <h2 className='header-text-md text-centre'>
            How a Meeting Works
        </h2>

<container className='flex-row'>
<div className='process-section'>
            <p className='header-text-sm text-centre'>
                Start with Prepared Speech
            </p>
 <img  alt='speech icon' src={one} className='process-section'/>
            <p className='body-text-lg'>
                Members come along with a prepared speech ready to entertain, inform or even wow the audience. <br/><br/> Each speech counting towards their progress in Pathways, Toastmasters unique educational program designed to support Toastmasters on thier individual journeys
            </p>
        </div>
        <div className='process-section'>
            <p className='header-text-sm text-centre'>
                Speeches are Evaluated
            </p>
            <img alt='notes icon' src={two} className='process-section'/>
            <p className='body-text-lg'>
                Constructive feedback is a huge part of what we do.<br/><br/> All speakers get direct feedback on how to improve speech and evaluators get to practise active listening skills
            </p>
        </div>
        <div className='process-section'>
            <p className='header-text-sm text-centre'>
                Members in Functionary Roles
            </p>
            <img alt='team icon' src={three} className='process-section'/>
            <p className='body-text-lg'>
                We all have a role to play in our meetings - as our guest, your job is to simply enjoy! <br/><br/> We will introduce to you the Toastmasters who will support in making sure that the club meetings runs smoothly and to time ⏱
            </p>
        </div>

        <div className='process-section'>
            <p className='header-text-sm text-centre'>
                Finish with Table Topics
            </p>
<img alt='fun icon' src={four} className='process-section'/>
     
            <p className='body-text-lg'>
                Guests and members are free to join in with our most popular segment, Table Topics!<br/><br/>Get a random question and you have two minutes to speak about anything that comes to mind! A fun way to practise impromtpu speaking for moments where we may suddenly have the spotlight.
            </p>
        </div>

</container>

<div className='join-us'>
<p>See this in action, join us at our next meeting! </p>
<JoinButtonBig />
</div>

        
        </section>
        </>
    )
}