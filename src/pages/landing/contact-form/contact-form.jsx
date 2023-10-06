import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRIVACY } from '../../../components/utils/routes';

export default function ContactForm() {
  const [join, setJoin] = useState(true);

  const joinMeeting = 'Hey, I would like to join your next meeting!';
  const enquireMeeting = 'Hey, I would like to know more about Paddington Toastmasters.';

  const setter = () => setJoin(!join);

  return (
    <section className="margin-section-lg about-body">
      <div className='about-body"'>

        <h1 className="header-text-md text-centre">Contact Form</h1>

        <form action="https://usebasin.com/f/309bbe43c897" method="POST">
          <label className="body-text-lg">Name</label>
          <input type="text" name="name" id="name" required autoComplete="on" />
          <label className="body-text-lg">Email address ( so we can contact you back )</label>
          <input type="email" name="name" id="email" required autoComplete="on" />
          <div className="">
            <button onClick={setter} disabled={join}>Join a meeting</button>
            <button onClick={setter} disabled={!join}>Find out more</button>
          </div>

          <label className="body-text-lg">Message</label>
          <textarea id="message" rows="6" cols="50" required value={join ? joinMeeting : enquireMeeting} />

          <button id="submit" type="submit">Submit</button>
        </form>
        <p>Sent!</p>
        <p>Oops- there has been an error! Try again</p>

        <p>
          {' '}
          How do we use your data? See our
          <span>
            {' '}
            <Link to={PRIVACY}>  Privacy statmeent</Link>
          </span>
        </p>
        <p />

      </div>

      <div className='about-body"'>
        <h1 className="header-text-md text-centre">Come and Find Us!</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39711.65625293619!2d-0.20618597508071157!3d51.53195388541217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876100079385691%3A0x8d2727bf0b2d1837!2sWestbourne%20Park%20Baptist%20Church!5e0!3m2!1sen!2suk!4v1696504825501!5m2!1sen!2suk" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map" />
        <p>
          Meetings every 1st and 3rd Tuesday of the Month
          18.00 for 18.15 start, 19.30 finish
          Westbourne Park Baptist Church, Porchester Rd, London W2 5DX
          And on Zoom!
          <br />
          Nearest Station : Royal Oak
        </p>
      </div>
    </section>
  );
}
