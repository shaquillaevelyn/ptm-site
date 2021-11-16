import React from 'react'
import { css } from '@emotion/css'

const Content = ({ children }) => {
    return (
        <div
            className={css`
                display: flex;
                max-height: 100vh;
            `}
        >
            {children}
        </div>
    )
}

export default Content
