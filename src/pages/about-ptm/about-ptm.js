import React from 'react';
import { facts } from '../../text/facts.json';
import './about-ptm.css';

export function FactsPanel() {
  return (
    <>
      {facts.map((item) => (
        <div>
          <image src={item.image} alt={item.alt} />
          <p>
            <span>{item.number}</span>
            {item.text}
          </p>
        </div>
      ))}
    </>
  );
}

export function TimelinePanel() {
  return (
    <>
    </>
  );
}

export function TimelinePanel() {
    return (
        <>
        </>
    )
}

export default function AboutPTM() {
    return (
        <>
            <div>
        
                <h2> Early Days</h2>
                <TimelinePanel/>
            <h2>Location, Location, Location</h2> 
            <h2> The Covid Effect</h2>

                            <FactsPanel />
            <h2> Paddington Toastmasters Today</h2>
             <h2> Accolades and Features</h2>
            </div>

      <h2> Early Days</h2>
      <TimelinePanel />
      <h2>Location, Location, Location</h2>
      <h2> The Covid Effect</h2>

      <FactsPanel />
      <h2> Paddington Toastmasters Today</h2>
      <h2> Accolades and Features</h2>
</>
  );
}
