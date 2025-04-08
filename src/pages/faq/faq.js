/* eslint-disable quotes */
import React, { useState } from 'react';
import showPlus from '../../images/showPlus.png';
import hideMinus from '../../images/hideMinus.png';
import './faq.css';

export default function FAQ() {
  const FAQArray = [
    {
      question: 'When and where do you meet?',
      answer:
        'We meet on the 1st and 3rd Tuesday of the Month. At the Westbourne Park Baptist Church, Porchester Rd, London W2 5DX. Doors open at 18:00 for a 18:15 start.',
    },
    {
      question: 'What can I expect at a meeting?',
      answer:
        'Our meetings comprise of two halves. The first, Prepared Speeches where members present to us a verbal creation of their making for the purposes of improving thier public speaking skill. All prepared speeches in meetings are evaluated by another member. The second half is Table Topics where impromptu speaking skill is put to the test.  Not all meetings look the same but we can assure you that at every meeting, you will have a lot of fun! ',
    },
    {
      question: "I'm a guest! What can I expect as a guest?",
      answer:
        'Firstly, welcome! We love to welcome new guests and are looking forward to showing you how we do things as a club! As a guest, you are more than welcome to enjoy the prepared speeches, feedback and the vibrant table topics impromptu speeches our club members will share. You are free to join our meetings more than once as a guest. We then hope that you will make a decision on whether to join our club as a member.',
    },
    {
      question:
        "I'/m shy, nervous and not yet comfortable public speaking! Do I have to speak in the meeting?",
      answer:
        'Absolutely no pressure to speak or particpate during while at a meeting! We just want you to feel comfortable. Feel free to come and enjoy the prepared speeches. And if you do not wish to particpate in table topics, please let the Toastmaster of the evening know. ',
    },
    {
      question: 'What do I receive as a member?',
      answer:
        'As a member, you gain access to Pathways, the Toastmasters educational program to help you manage your speech progress. The ability to contribute fully to a meeting including delivering prepared speeches, evaluations and functionary roles to support the running of the meeting. The ability to compete in contests in your club and against other clubs. Also, the opportuntiy to become a member of the leadership committee, allowing you to shape the steer the direction of the club as well as develop your leadership potential - skills which can be applicable to all areas of life. ',
    },
    {
      question: 'Can Toastmasters help my career/professional life?',
      answer:
        'Absolutely! Communication is one of the top skills requested by employers year on year. And to improve your communication is to improve your employment chances. Additonally, our Table Topics sessions are great practise for moments when you are called upon to do an impromptu speeches so even with little prepartion, you can impress your peers. Our members in our club and in the wider Toastmasters community come from many walks of life and can become an excellent network to connect you to your next working opportunity!',
    },
    {
      question: 'How do I join in?',
      answer:
        'There are limited guest spots at each meeting- so be sure to contact Janet using the button below early to secure a spot! Paddington Toastmasters cannot guarantee space for walk in attendants ',
    },
  ];

  return (
    <div className="faq-body">
      <h1>Frequently Asked Questions</h1>
      <h3>
        Check out the most common questions about Paddington Toastmasters below{' '}
      </h3>

      <h4>
        Question not here? &#160;
        <span>
          Click{' '}
          <span>
            <a href="mailto:janetfmmilnes@gmail.com?subject=I%20have%20a%20question%20about%20PTM%20">
              here
            </a>{' '}
          </span>{' '}
          to send it to our committee
        </span>
      </h4>

      <div className="question-answer">
        {FAQArray.map((item) => (
          <ShowReveal
            key={item.key}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
}

export function ShowReveal({ question, answer }) {
  const [show, setShow] = useState(false);
  const handler = () => setShow(!show);
  return (
    <>
      <div onClick={handler} className="show-hide-image">
        {show ? (
          <img src={hideMinus} alt="minus sign to hide" height="30px" />
        ) : (
          <img src={showPlus} alt="plus sign to reveal" height="30px" />
        )}
        <h3>{question}</h3>
      </div>

      <div>
        <p hidden={!show}>{answer}</p>
        <hr />
      </div>
    </>
  );
}
