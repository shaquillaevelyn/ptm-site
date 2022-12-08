import React, {useEffect, useState} from 'react';
import './pageup.css'

export default function PageUp () {
    const [show, setShow] = useState(false)

    useEffect(() =>{
        window.addEventListener('scroll', scrollListener)
        return 
    }, [])

    const screen = window.innerHeight
    const footerHeight = 600
    const scrollListener = () => {
        (window.scrollY > 600)  ? setShow(false) : setShow(true)
    }


    const pageUp = () => {
            window.scrollTo(
                {
                    top: 0,
                    behavior: 'smooth',
                })

    }


    return(
        <button id="button" className= {`pageUp   ${setShow ? 'btn-hide' : 'btn-show'}` } onClick={pageUp} hidden={show}>
            Page Up
        </button>

    )  
}