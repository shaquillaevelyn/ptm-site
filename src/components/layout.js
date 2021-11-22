import React from 'react'
import { css } from '@emotion/css'

const Content = (props) => {
    return (
        <div
            className={css`
                display: flex;
                max-height: 100vh;
            `}
        >
            {props.children}
        </div>
    )
}

export default Content
