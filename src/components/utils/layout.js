import React from 'react'
import { css } from '@emotion/css'


const Content = ({children}) => {
    return (
        <div
            className={css`
            height: 100%;
            `}
        >
{children}
        </div>
    )
}

export default Content
