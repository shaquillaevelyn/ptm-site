import React from 'react'
import { Link, Router } from 'react-router-dom'
import Button from '@material-ui/core/Button'

export function JoinButton({ mailto, label }) {
    return (
        <Button variant="contained" color="success" onClick={onclick}>
            <Router>
                <Link
                    to="mailto:janetfmmilnes@gmail.com?subject=I%20would%20like%20to%20join%20a%20PTM%20meeting!"
                    onClick={(e) => {
                        window.location = mailto
                        e.preventDefault()
                    }}
                >
                    {label}
                </Link>
            </Router>
        </Button>
    )
}

export function QueryButton({ mailto }) {
    return (
        <Button variant="contained" color="success" onClick={onclick}>
            <Router>
                <Link
                    to="mailto:janetfmmilnes@gmail.com?subject=I%20would%20like%20to%20know%20more%20about%20PTM%20meetings!"
                    onClick={(e) => {
                        window.location = mailto
                        e.preventDefault()
                    }}
                >
                    Join Us
                </Link>
            </Router>
        </Button>
    )
}
