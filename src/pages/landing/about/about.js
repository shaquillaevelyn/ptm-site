import React from 'react';
import './about.css';
import { Button } from '../../../components/buttons/button';
import about from '../../../text/about';

export default function About() {
  return (
    <>
      <section className="margin-section-lg about-body">
        <article className="text">
          <h2 className="header-text-lg">
            Welcome to Paddington Toastmasters -
            <br />
            Your first step towards Public Speaking Excellence
          </h2>
          <p className="body-text-lg body-text-lg-bold">
            Public Speaking is NOT to be Feared
          </p>
          <br />
          <p className="body-text-lg body-text-lg-bold">
            It can be enjoyed and Paddington Toastmasters are here to help!
          </p>
          <br />
          <p className="body-text-lg">
            We are a lively and supportive club, ready to support you as you
            build your confidence, public speaking and communication
            skills.Whether you are a complete newbie or a seasoned public
            speaker, you are welcome to join us at our meetings where we can
            improve together.
          </p>
          <br />
          <p className="body-text-lg body-text-lg-bold">Progress with us</p>
          <p className="body-text-lg">
            We pride ourselves on creating a relaxed and informal environment
            where you feel comfortable to participate and most importantly, have
            a laugh while doing so.&#10; On becoming a member, we offer
            mentorship and support as you make your way through the Toastmasters
            International Educational Program, Pathways.
          </p>
          <p className="body-text-lg">
            Learn more about&#10;
            <span>
              <a className="inline-link" href="www.bbc.co.uk">
                Pathways
              </a>
            </span>
          </p>
          <br />
          <p className="body-text-lg body-text-lg-bold">Reap the Benefits </p>
          <p id="test-ref" className="body-text-lg">
            Help us to help you to Build Leadership Skills, Maximise your
            Potential, in the workplace and beyond, and Enhance Self-Awareness.
            <br />
            The benefits are endless.
            <br />
            <br />
            We are waiting to welcome you!
            <br />
            <br />
          </p>
        </article>

        <div>
          <img id="image" src={about[0].image} alt="talking toastmasters" />;
        </div>
      </section>

      <div className="join-us">
        <Button size={'large'} join={true} />
      </div>
    </>
  );
}
