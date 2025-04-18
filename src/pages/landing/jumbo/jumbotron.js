import React from 'react';
import './jumbo.css';
import backgroundvid from '../../../video/ptm-video.mp4';
import { Button } from '../../../components/buttons/button';

function Jumbotron() {
  const prefersReduced = () => {
    if (window.matchMedia('prefers-reduced')) {
      return true;
    } else {
      return false;
    }
  };

  // const properties = autoplay loop muted

  return (
    <>
      <div className="jumbo margin-section-md">
        <div className="background-video">
          {prefersReduced ? (
            <video controls id="video">
              <source src={backgroundvid} type="video/mp4" />
            </video>
          ) : (
            <video autoPlay loop muted id="video">
              <source src={backgroundvid} type="video/mp4" />
            </video>
          )}
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
              18.00 for 18.15 start, 19.30 finish. <br />
              <br />
              Westbourne Park Baptist Church <br />
              Limited guest spaces!
              <br />
            </p>
            <Button size="small" join={true} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Jumbotron;
