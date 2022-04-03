import React, {useEffect, useState} from 'react';
import './pageup.css'

export default function PageUp () {
    const [show, setShow] = useState(false)

    useEffect(() =>{
        window.addEventListener('scroll', scrollListener)
        return 
    }, [])

    // useEffect(() =>{
    //     window.addEventListener('scroll', scrollStopListener)
    //     return 
    // }, [])


    const scrollListener = (e) => {
        console.log(document.documentElement.scrollTop)
        document.documentElement.scrollTop > 650 ? setShow(false) : setShow(true)

    }

    // const scrollStopListener = (e) => {
    //     if (document.documentElement.scrollTop < 650){
    //         btn.className.add('btn-stop') 
    // }}


    const pageUp = () => {
            window.scrollTo(0, 0)

    }


    return(
        <button id="button" className= {`pageUp  ${setShow ? 'btn-hide' : 'btn-show'}` } onClick={pageUp} hidden={show}>
            Page Up
        </button>

    )  
}