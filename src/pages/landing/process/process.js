import React from 'react';
import './process.css';
import process from '../../../text/process';
import { Button } from '../../../components/buttons/button';


export default function Process () {
  return (
    <>

      <section className="margin-section-sm" >
        <article>
          <h2 className="header-text-md text-centre">
          Our Meetings
          </h2>
          <p className="header-text-sm text-centre">
          New to Toastmasters? This is how we do things at a meeting 
          </p>

          <section className="flex-row flex-wrap">

            {process.map((item) => (
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

          </section>

        </article>
        <div className="join-us">
          <p>See this in action, join us at our next meeting! </p>

          <Button size='large' join={true}/>
        </div>

      </section>

    </>
  );
};
