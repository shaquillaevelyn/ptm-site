import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './menu.css';

export default function MenuModal({ menuArray, hidden, onClick }) {

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
