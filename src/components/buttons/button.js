import React from 'react';


export function Button({size, join}){

  const emailJoin = 'mailto:janetfmmilnes@gmail.com?subject=I%20would%20like%20to%20join%20a%20PTM%20meeting!';
  const emailQuery = 'mailto:janetfmmilnes@gmail.com?subject=I%20would%20like%20to%20know%20more%20about%20PTM%20meetings!';

  let emailText = '';
  let buttonType = '';
  let buttonSize = '';

  if(size === 'small'){
    buttonSize = 'btn-sm ';

  } else if (size === 'large') {
    buttonSize = 'btn-lg ';
  } else {
    buttonSize = 'btn-md ';
  }

  if (join){
    emailText === emailJoin;
    buttonType = 'join-btn ';
  } else {
    emailQuery == emailText;
    buttonType = 'query-btn ';
  }

  return(
    <a className={buttonSize + buttonType + 'btn'} href={join ? emailJoin : emailQuery}>
      <span>{join ? 'Join us at our next meeting' : ' Drop us an email'}</span>
    </a>

  );
}
