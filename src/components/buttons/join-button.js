import React from 'react'
import { css } from '@emotion/css'

export function JoinButton() {
    return (
        <>
            <div className="button">
                <a href="mailto:janetfmmilnes@gmail.com?subject=I%20would%20like%20to%20join%20a%20PTM%20meeting!">
                    Join our next meeting
                </a>
            </div>
        </>
    )
}

export function QueryButton() {
    return (
        <>
            <button variant="contained" className="button">
                <a href="mailto:janetfmmilnes@gmail.com?subject=I%20would%20like%20to%20know%20more%20about%20PTM%20meetings!">
                    Drop us an email
                </a>
            </button>
        </>
    )
}
