import React from 'react';
import { Link } from 'react-router-dom';
import toastmastersColor from '../../images/toastmastersColor.png';
import ptmLogo from '../../images/ptm-logo-white-small-transparent.svg';
import { JoinButtonSmall, QueryButton } from '../buttons/join-button';
import { ROOT, FAQQ, PRIVACY } from '../utils/routes';
import { scrollToTop } from '../utils/scroll';
import './footer.css';


const LinksArray = [
  {
    header: 'Explorer',
    content: [
      { title: 'Home', url: ROOT },
      { title: 'FAQ', url: FAQQ },
    ],
  },
  {
    header: 'External',
    content: [
      {
        title: 'Toastmasters International', url:'https://www.toastmasters.org/Find-a-Club/04495118-04495118'
      },
      {
        title: 'LinkedIn', url:  'https://www.linkedin.com/company/paddingtontoastmasters'
      },
      {
        title: 'Pathways', url: 'https://www.toastmasters.org/education/pathways'
      }
    ]
  },
  {
    header: 'Legal',
    content: [{ title: 'Privacy Policy', url: PRIVACY }],
  },
];

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

function SectionComponent({ content }) {
  return (
    <ListRender listarray={content} />
  );
}

export function FooterLinks() {
  return (
    <>
      {LinksArray.map((item) => (
        <div key={item.key}>
          <h3>{item.header}</h3>
          <SectionComponent content={item.content} />

        </div>
      ))}
    </>
  );
}


function ListRender({ index, listarray }) {


  return (
    <div>
      <ul>
        {listarray.filter(link => link.url.startsWith('https')).map((item) => (

          <li key={index}>
            <Link
              rel="noreferrer"
              target="_blank"
              to={item.url}>
              {item.title}
            </Link>
          </li>

        ))}
        {listarray.filter(link => link.url.startsWith('/')).map((item) => (

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
