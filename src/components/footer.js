import React from 'react'
import styled from '@emotion/styled'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import mailLogo from '../images/email.png'
import toastmasters from '../images/toastmasters-logo-color.png'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import './footer.css'

const FooterStyle = styled.footer`
    max-width: 100vw;
`

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        minHeight: '40vh',
        elevation: 0,
        backgroundColor: '#004165',
        position: 'fixed',
        zIndex: '10',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '1%',
    },
    image: {
        marginLeft: '25%',
        marginRight: '25%',
        marginTop: '25%',
        marginBottom: '5%',
        width: '50%',
        height: '500%',
    },
    text: {
        marginLeft: '25%',
        marginRight: '25%',
        fontFamily: 'Source Sans Pro',
        fontWeight: 400,
        fontSize: '2vh',
        textAlign: 'center',
    },
}))

export default function Footer() {
    const classes = useStyles()

    function FormRow() {
        return (
            <>
                <Grid item xs={2}>
                    <div>
                        <img
                            className={classes.image}
                            alt="tmi"
                            src={toastmasters}
                        ></img>
                        <Typography
                            variant="h4"
                            gutterBottom
                            className={classes.text}
                        >
                            Paddington Toastmasters<br></br>
                            Club Number: 4495118
                        </Typography>
                    </div>
                </Grid>

                <Grid className="section" item xs={2}>
                    <ul>
                        <li>
                            <b>Explore</b>
                        </li>
                        <br></br>
                        <li>
                            <a
                                href="www.google.com"
                                style={{
                                    color: 'white',
                                    textDecoration: 'underline',
                                }}
                            >
                                Home
                            </a>{' '}
                        </li>

                        <li>
                            <a
                                href="www.google.com"
                                style={{
                                    color: 'white',
                                    textDecoration: 'underline',
                                }}
                            >
                                About
                            </a>

                            <li>Paddington Toastmasters</li>
                            <li>Committee</li>
                            <li>Membership</li>
                        </li>

                        <li>
                            <a
                                href="www.google.com"
                                style={{
                                    color: 'white',
                                    textDecoration: 'underline',
                                    marginBottom: '10px',
                                }}
                            >
                                Testimonials
                            </a>
                        </li>

                        <li>
                            <a
                                href="www.google.com"
                                style={{
                                    color: 'white',
                                    textDecoration: 'underline',
                                }}
                            >
                                Join a meeting
                            </a>
                        </li>
                    </ul>
                </Grid>
                <Grid className="section" item xs={2}>
                    <ul>
                        <li>
                            <b> Social </b>
                        </li>
                        <br></br>

                        <li>LinkedIn</li>
                        <li>Toastmasters International</li>
                        <li>Eventbrite</li>
                    </ul>
                </Grid>

                <Grid className="section" item xs={2}>
                    <ul>
                        <li>
                            <b>Legal</b>
                        </li>
                        <br></br>
                        <li>
                            <a>Privacy Policy</a>
                        </li>
                    </ul>
                </Grid>

                <div className="section-mail">
                    <Grid item m={4}>
                        <h3>Any questions or queries?</h3>

                        <Button variant="contained" color="success">
                            Drop us an email
                        </Button>

                        <h4>
                            A member of our committe will get back to you ASAP
                        </h4>

                        <a href="mailto:janetfmmilnes@gmail.com?subject=I%20would%20like%20to%20know%20more%20about%20PTM%20meetings!">
                            <img src={mailLogo} alt="email-logo"></img>{' '}
                        </a>
                    </Grid>
                </div>
            </>
        )
    }

    return (
        <div className="footer">
            <div>
                <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={1}>
                        <FormRow />
                    </Grid>
                    <Grid
                        style={{ marginBottom: '5vh' }}
                        container
                        item
                        xs={12}
                        spacing={1}
                        className="made-by"
                    >
                        Made with love by
                        <span>
                            `$ `
                            <a href="www.github.com/shaquillaevelyn">
                                {' '}
                                shaquilla evelyn
                            </a>
                        </span>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
