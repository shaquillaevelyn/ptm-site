import React from 'react';

export function JoinButtonSmall() {
  return (

    <button type="button" className="join-button-small" href="mailto:janetfmmilnes@gmail.com?subject=I%20would%20like%20to%20join%20a%20PTM%20meeting!">
        Join us at our next meeting
    </button>
  );
}

export function JoinButtonBig() {
  return (
    <button type="button" className="join-button-big" href="mailto:janetfmmilnes@gmail.com?subject=I%20would%20like%20to%20join%20a%20PTM%20meeting!">
        Join us at our next meeting
    </button>
  );
}

export function QueryButton() {
  return (
    <button className="query-button" type="button" href="mailto:janetfmmilnes@gmail.com?subject=I%20would%20like%20to%20know%20more%20about%20PTM%20meetings!" >
        Drop us an email
    </button>
  );
}
