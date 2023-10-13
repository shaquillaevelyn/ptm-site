import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import * as URL from '../../utils/routes';
import './menu.css';

export default function MenuModal({ hidden, onClick }) {
  const menuArray = [
    { title: 'Home', url: URL.ROOT },
    { title: 'Welcome to PTM', url: URL.ROOT },
    { title: 'Our Meetings', url: URL.ROOT },
    { title: 'Testimony', url: URL.ROOT },
    { title: 'Contact Us', url: URL.ROOT },
    { title: 'About PTM', url: URL.ROOT },
    { title: 'Resources', url: URL.ROOT },
    { title: 'FAQ', url: URL.FAQQ },

  ];

  return ReactDOM.createPortal(
    <div className="modal-wrapper" hidden={hidden}>
      <div className="modal-background">
        <div className="modal-body">
          <div className="modal-menu-content">
            <ol>
              {menuArray.map((item) => (
                <li key={item.key}>
                  <Link onClick={onClick} to={item.url}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
