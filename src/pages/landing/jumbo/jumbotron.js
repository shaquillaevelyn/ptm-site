import React, { forwardRef } from 'react';
import './jumbo.css';
import backgroundvid from '../../../video/ptm-video.mp4';
import { JoinButtonSmall } from '../../../components/buttons/join-button';

const Jumbotron = forwardRef(function Jumbotron(props, ref) {
  return (
    <div key={0} ref={ref} className="jumbo margin-section-md">
      <div className="background-video">
        <video autoPlay loop muted id="video">
          <source src={backgroundvid} type="video/mp4" />
        </video>
      </div>
      <div className="overlay-desc">
        <div className="jumbo-text">
          <h1 className="header-text-mdlg">
            We are Paddington Toastmasters
            <br />
            <span className="accent-text">A Club Like No Other</span>
          </h1>
          <p className="body-text-lg">
            {' '}
            Meetings every 1st and 3rd Tuesday of the Month
            <br />
            18.00 for 18.15 start, 19.30 finish
            {' '}
            <br />
            Westbourne Park Baptist Church, Porchester Rd,
            London W2 5DX
            {' '}
            <br />
            {' '}
            And on Zoom!
            {' '}
          </p>
          <JoinButtonSmall />
        </div>
      </div>
    </div>
  );
}
);

export default Jumbotron;
