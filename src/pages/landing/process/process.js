import React from 'react';
import './process.css';
import { about } from '../../../text/process.json';
import { JoinButtonBig } from '../../../components/buttons/join-button';

export default function Process() {
  return (
    <section className="margin-section-sm">
      <article>
        <h2 className="header-text-md text-centre">
          How a Meeting Works
        </h2>

        <container className="flex-row flex-wrap">

          {about.map((item) => (
            <div className="process-section border" key={item.key}>
              <p className="header-text-sm text-centre">
                {item.header}
              </p>
              <img alt={item.alt} src={item.image} className="process-section" />
              <p className="body-text-lg">
                {item.text}
              </p>

            </div>
          ))}

        </container>

      </article>
      <div className="join-us">
        <p>See this in action, join us at our next meeting! </p>

        <JoinButtonBig />
      </div>

    </section>
  );
}
