import React from 'react'
import { css } from '@emotion/css'

export default function Menu() {
    return (
        <>
            <div
                className={css`
                    display: flex;
                    flex-directon: row;
                    background-color: #565656;
                    max-width: 100%;
                    min-height: 70px;
                    color: black;
                `}
            >
                scroll to discover more
            </div>
        </>
    )
}
