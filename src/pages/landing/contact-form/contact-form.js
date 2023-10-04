import React, { useState } from 'react'


export default function ContactForm() {

    const [join, setjoin] = useState(true)

    

    const joinMeeting = "Hey, I would like to join your next meeting!"
    const enquireMeeting = "Hey, I would like to know more about Paddington Toastmaters."

    const setText = () =>  join ? joinMeeting : enquireMeeting
    
    return (
        <>
            <section className="margin-section-lg about-body">
            <h1 className="header-text-md text-centre">Contact Form</h1>

                <form action="https://usebasin.com/f/309bbe43c897" method="POST" >
                <label className='body-text-lg'>Name</label>
                <input type="text" name="name" id="name" required  autocomplete="on"/>
                <label className='body-text-lg'>Email address ( so we can contact you back )</label>
                    <input type="email" name="name" id="email" required autocomplete="on" />
                    <button >Join a meeting</button>
                    <button>Find out more</button>
                <label className='body-text-lg'>Message</label>
                <textarea  id="message" rows="6" cols="50" required />

                <button id="submit" type="submit">Submit</button>
                </form>     
                <p>Sent!</p>
                <p>Oops- there has been an error! Try again</p>

                <p> How do we use your data?</p>   
                <p>see our Privacy statment</p>
                
 
                </section>

        </>
    )
}