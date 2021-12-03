import React, { useState, useEffect } from 'react'

const [windowWidth, setWindowWidth] = useState(0)

useEffect(() => {
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
}, [])

const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
}
