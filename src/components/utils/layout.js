import React from 'react'
import { css } from '@emotion/css'
import styled from '@emotion/styled'

const Content = () => {
    return (
        <div
            className={css`
                display: flex;
            `}
        >
            test
        </div>
    )
}

const ContentLayout = styled.a`
    top: 120px;
    position: relative;
    display: flex;
`

export default Content
