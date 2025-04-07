/* eslint-disable react/display-name */
import React from 'react';
import { Button } from '../../../components/buttons/button';

function ContactForm() {
  return (
    <>
      <p
        id="landing-contact"
        className="chunky-body-text margin-section-sm flex-row"
      >
        {' '}
        Ready to take the leap?
      </p>
      <div className="margin-section-sm about-body">
        <section className="margin-section-lg about-body-col">
          <p className="header-text-mdlg">Join us at our next meeting!</p>
          <p className="body-text-lg">
            Westbourne Park Baptist Church, Porchester Rd, London W2 5DX
          </p>
          <p className="body-text-lg">
            Limited guest spaces!
            <br />
            Reach out to Janet using the button below to register your interest.
          </p>{' '}
          <Button size="small" join={true} />
        </section>
        <section className="margin-section-lg about-body-col">
          <iframe
            className="iframe"
            title="paddington toastmasters location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9930.821114971737!2d-0.1891393!3d51.5186228!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487611287d473703%3A0x53fa99ac788a9369!2sPaddington%20Toastmasters!5e0!3m2!1sen!2suk!4v1700836116875!5m2!1sen!2suk"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </div>
    </>
  );
}

export default ContactForm;
