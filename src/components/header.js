import React from 'react'
import styled from '@emotion/styled'
import '../index'

import toastmasterslogowhite from '../images/toastmasterslogowhite.png'
import './header.css'

const HeaderStyle = styled.header`
    display: flex;
    max-width: 100%;
    min-height: 10vh;
    background-color: #004165;
    box-shadow: 0px 1px 5px #888, 0px 0px 5px #a9b2b1;
    color: #ffffff;
`

export default function Header() {
    return (
        <>
            <HeaderStyle>
                <img
                    className="image"
                    alt="white tmi logo"
                    src={toastmasterslogowhite}
                ></img>
                <span className="typography">Paddington Toastmasters</span>
            </HeaderStyle>
        </>
    )
}

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     navBar: {
//         backgroundColor: '#004165',
//         minHeight: '10vh',
//     },
//     image: {
//         paddingTop: '2vh',
//         paddingBottom: '2vh',
//         paddingRight: '1vh',
//         maxWidth: '87px',
//         maxHeight: '72px',
//     },
//     typography: {
//         fontFamily: 'Source Sans Pro',
//         fontWeight: 400,
//         fontSize: '40px',
//     },
//     title: {
//         flexGrow: 1,
//     },
//     links: {
//         marginRight: theme.spacing(4),
//         display: 'inline',
//         color: '#ffffff',
//     },
// }))

// export default function Header() {
//     const classes = useStyles()
//     // const preventDefault = (event) => event.preventDefault();

//     return (
//         <div className={classes.root}>
//             <AppBar className={classes.navBar} position="static">
//                 <Toolbar>
//                     <img
//                         className={classes.image}
//                         alt="white tmi logo"
//                         src={toastmasterslogowhite}
//                     ></img>
//                     &#10;
//                     <Typography variant="h2" className={classes.typography}>
//                         Paddington Toastmasters
//                     </Typography>
//                     {/* <div  className={classes.links}>
//         <Link href="#" onClick={preventDefault} color="inherit">
//     Home
//   </Link>
//   <Link href="#" onClick={preventDefault} style={{ flex: 1 }} color="inherit">
//   About Us
//   </Link>
//   <Link href="#" onClick={preventDefault} color="inherit">
//     Testimonials
//   </Link>
//   <Link href="#" onClick={preventDefault} color="inherit">
//     Join Us
//   </Link>
//   </div> */}
//                 </Toolbar>
//             </AppBar>
//         </div>
//     )
// }
