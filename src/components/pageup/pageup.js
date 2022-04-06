import { doc } from 'prettier';
import React, {useEffect, useState} from 'react';
import './pageup.css'

export default function PageUp () {
    const [show, setShow] = useState(false)

    useEffect(() =>{
        window.addEventListener('scroll', scrollListener)
        return 
    }, [])

    // useEffect(() => {
    //     window.onload()
    // }, [])



    const scrollListener = (e) => {
        (document.documentElement.scrollTop > 600)  ? setShow(false) : setShow(true)
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