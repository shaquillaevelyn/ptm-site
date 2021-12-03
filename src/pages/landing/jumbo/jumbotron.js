import React from 'react'
import './jumbo.css'
import club from '../../../images/club.jpg'
import { JoinButton } from '../../../components/buttons/join-button'

export default function Jumbotron() {
    return (
        <>
            <div className="jumbo ">
                <div className="background-video"></div>
                <div className="jumbo-text">
                    <h2>We are Paddington Toastmaters</h2>
                    <h3>A Club Like No Other</h3>
                    <p>
                        {' '}
                        Meetings every 1st and 3rd Tuesday of the Month
                        <br />
                        18.00 for 18.15 start, 19.30 finish <br />
                        Westbourne Park Baptist Church, Porchester Rd, London W2
                        5DX And on Zoom!{' '}
                    </p>
                    <JoinButton />
                </div>
            </div>
        </>
    )
}
