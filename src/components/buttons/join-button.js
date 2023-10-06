import React from 'react';

export function JoinButtonSmall() {
  return (
    <button className="join-button-small">
      <a href="mailto:janetfmmilnes@gmail.com?subject=I%20would%20like%20to%20join%20a%20PTM%20meeting!">
        Join us at our next meeting
      </a>
    </button>
  );
}

export function JoinButtonBig() {
  return (
    <button className="join-button-big">
      <a href="mailto:janetfmmilnes@gmail.com?subject=I%20would%20like%20to%20join%20a%20PTM%20meeting!">
        Join us at our next meeting
      </a>
    </button>
  );
}

export function QueryButton() {
  return (
    <button variant="contained" className="query-button">
      <a href="mailto:janetfmmilnes@gmail.com?subject=I%20would%20like%20to%20know%20more%20about%20PTM%20meetings!">
        Drop us an email
      </a>
    </button>
  );
}
