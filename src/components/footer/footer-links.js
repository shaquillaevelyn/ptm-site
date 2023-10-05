import React from 'react';
import { Link } from 'react-router-dom';
import toastmastersColor from '../../images/toastmastersColor.png';
import ptmLogo from '../../images/ptm-logo-white-small-transparent.svg';
import { JoinButtonSmall, QueryButton } from '../buttons/join-button';
import { ROOT, FAQQ, PRIVACY } from '../utils/routes';
import './footer.css';

export function PTMFooter() {
  return (
    <div className="centreInDiv footerPTMDetails">
      <img alt="tmi" className="footerImage" src={toastmastersColor} />
      <img alt="paddington toastmasters - a club like no other" className="footerImage tagline" src={ptmLogo} />
      <p>
        Paddington Toastmasters
        <br />
        Club Number: 4495118
      </p>

    </div>
  );
}

function ListRender({ index, listarray }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <ul>
        {listarray.map((item) => (

          <li key={index}>
            <Link onClick={scrollToTop} to={item.url}>
              {item.title}
            </Link>
          </li>

        ))}
      </ul>
    </div>
  );
}

function SectionComponent({ content }) {
  return (
    <ListRender listarray={content} />
  );
}

export function FooterLinks() {
  const FooterArray = [
    {
      header: 'Explorer',
      content: [
        { title: 'Home', url: ROOT },
        { title: 'FAQ', url: FAQQ },
      ],
    },
    {
      header: 'Legal',
      content: [{ title: 'Privacy Policy', url: PRIVACY }],
    },
  ];

  return (
    <>
      {FooterArray.map((item) => (
        <div>
          <h3>{item.header}</h3>
          <SectionComponent content={item.content} />

        </div>
      ))}
    </>
  );
}
export function ExternalLinks() {
  return (
    <div>
      <h3>Social</h3>
      <ul>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.toastmasters.org/Find-a-Club/04495118-04495118"
          >
            Toastmasters International
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/company/paddingtontoastmasters"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.eventbrite.co.uk/e/paddington-toastmaster-club-meeting-tickets-166138072447"
          >
            Eventbrite
          </a>
        </li>
      </ul>
    </div>
  );
}

export function ContactFooter() {
  return (
    <>

      <h3>Come to our next meeting!</h3>
      <JoinButtonSmall />
      <h3>Any questions or queries?</h3>
      <QueryButton />
      <p>A member of our committe will get back to you ASAP</p>
    </>
  );
}
