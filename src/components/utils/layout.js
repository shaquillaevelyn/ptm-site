import React from 'react'
import { css } from '@emotion/css'

const Content = ({ children }) => {
    return (
        <div
            className={css`
                height: 100%;
                width: 100vw;
            `}
        >
            {children}
        </div>
    )
}

export default Content
