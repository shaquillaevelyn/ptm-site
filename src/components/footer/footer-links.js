import React from 'react'
import toastmastersColor from '../../images/toastmastersColor.png'
import useWindowSize from '../utils/useWindowSize'
import question from '../../images/customer-service.png'

export function PTMFooter() {
    const { width } = useWindowSize()
    return (
        <>
            <div className="centreInDiv">
                <img alt="tmi" className="image" src={toastmastersColor}></img>
                <h4>
                    Paddington Toastmasters<br></br>
                    Club Number: 4495118
                </h4>
            </div>
        </>
    )
}

export function ExploreFooter() {
    const { width } = useWindowSize()

    return (
        <>
            <div>
                <h4> Explore</h4>
                <li>
                    <a> About PTM </a>
                </li>
                <li>
                    <a> Membership </a>
                </li>
                <li>
                    <a> Toastmasters International </a>
                </li>
                <li>
                    <a> Pathways </a>
                </li>
            </div>
        </>
    )
}

export function SocialFooter() {
    return (
        <>
            <div>
                <h4>Social</h4>
                <li>
                    <a> Toastmasters International </a>
                </li>
                <li>
                    <a> LinkedIn </a>
                </li>
                <li>
                    <a> Eventbrite </a>
                </li>
            </div>
        </>
    )
}

export function LegalFooter() {
    return (
        <>
            <div>
                <h4>Legal</h4>
            </div>
            <li>
                <a> Privay Policy </a>
            </li>
        </>
    )
}

export function ContactFooter() {
    return (
        <>
            <div className="centreInDiv">
                <img src={question} className="image" alt="question-logo"></img>{' '}
                <h3>Any questions or queries?</h3>
                <button variant="contained" color="success">
                    <a href="mailto:janetfmmilnes@gmail.com?subject=I%20would%20like%20to%20know%20more%20about%20PTM%20meetings!">
                        Drop us an email
                    </a>
                </button>
                <h4>A member of our committe will get back to you ASAP</h4>
            </div>
        </>
    )
}

// export default function ExploreFooter() {
//     const [show, setShow] = React.useState(false)
//     const onClick = () => setShow(true)

//      const { width } = useWindowSize();

//     return (

//             <h1>Explore</h1>
// <ul>
//             <li>
//                 <a
//                     href="www.google.com"
//                     style={{
//                         color: 'white',
//                         textDecoration: 'underline',
//                     }}
//                 >
//                     Home
//                 </a>{' '}
//             </li>

//             <li>
//                 <a
//                     href="www.google.com"
//                     style={{
//                         color: 'white',
//                         textDecoration: 'underline',
//                     }}
//                 >
//                     About
//                 </a>

//                 <li>Paddington Toastmasters</li>
//                 <li>Committee</li>
//                 <li>Membership</li>
//             </li>

//             <li>
//                 <a
//                     href="www.google.com"
//                     style={{
//                         color: 'white',
//                         textDecoration: 'underline',
//                         marginBottom: '10px',
//                     }}
//                 >
//                     Testimonials
//                 </a>
//             </li>

//             <li>
//                 <a
//                     href="www.google.com"
//                     style={{
//                         color: 'white',
//                         textDecoration: 'underline',
//                     }}
//                 >
//                     Join a meeting
//                 </a>
//             </li>
//         </ul>
// </>
