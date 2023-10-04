import React from 'react'
import { facts } from '../../text/facts.json'
import './about-ptm.css'

export function FactsPanel() {
    return (
        <>
            {facts.map((item) => (
                <div>
                    <image src={item.image} alt={item.alt} />
                    <p><span>{item.number}</span>{item.text}</p>
                </div>
            ))}
        </>
    )
}

export default function AboutPTM() {
    return (
        <>
            <div>
                
            <FactsPanel/>
    
            </div>

        </>

    )
}
