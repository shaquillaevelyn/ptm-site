import React from 'react';
import ReactDOM from 'react-dom';
import './menu.css';
import Links from '../../utils/routes';

export default function MenuModal( {hidden }) {


  return ReactDOM.createPortal(
    <div className="modal-wrapper" hidden={hidden}>
      <div className="modal-background">
        <div className="modal-body">
          <div className="modal-menu-content">
            <ol>
              <Links/>
            </ol>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
