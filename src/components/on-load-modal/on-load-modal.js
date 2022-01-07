import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { GrClose } from 'react-icons/gr'
import './on-load-modal.css'

export default function OnLoadModal() {
    const [show, setShow] = useState(true)
    const onClick = () => setShow(false)

    return ReactDOM.createPortal(
        <>
            <div className="load-modal-wrapper" hidden={!show}>
                <div className="load-modal-background">
                    <div className="load-modal-body">
                        <div className="load-modal-text">
                            <GrClose
                                type="button"
                                className="load-modal-button"
                                onClick={onClick}
                            />
                            <h3>Covid-19 Notice</h3>

                            <p>
                                Our second meeting of 2022, January 18th, will
                                take place online in light of developments
                                regarding the Omnicron variant <br />
                                <br />
                                Paddington Toastmasters expect that we will
                                resume our fully Hybrid meeting format person
                                meetings for our first meeting on February.
                                <br />
                                <br /> Stay Safe, <br /> Paddington Toastmasters
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.body
    )
}
