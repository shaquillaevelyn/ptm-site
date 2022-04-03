import React from 'react'
import './jumbo.css'
import backgroundvid from '../../../video/ptm-video.mp4'
import { JoinButton } from '../../../components/buttons/join-button'

export default function Jumbotron() {
    return (
        <>
            <div className="jumbo ">
                {/* <div className='jumbo-animation'>

                </div> */}
                <div className="background-video">
                    <video autoPlay loop muted id="video">
                        <source src={backgroundvid} type="video/mp4" />
                    </video>
                </div>
                <div className="overlay-desc">
                    <div className="jumbo-text">
                        <h2>We are Paddington Toastmaters</h2>
                        <h3>A Club Like No Other</h3>
                        <p>
                            {' '}
                            Meetings every 1st and 3rd Tuesday of the Month
                            <br />
                            18.00 for 18.15 start, 19.30 finish <br />
                            Westbourne Park Baptist Church, Porchester Rd,
                            London W2 5DX <br /> And on Zoom!{' '}
                        </p>
                        <JoinButton />
                    </div>
                </div>
            </div>
        </>
    )
}
