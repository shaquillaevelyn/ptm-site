import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { GrClose } from 'react-icons/gr';
import './on-load-modal.css';

export default function OnLoadModal() {
  const [show, setShow] = useState(true);
  const onClick = () => setShow(false);
  const modalRef = useRef(null);

  return ReactDOM.createPortal(
    <div className="load-modal-wrapper" hidden={!show}>
      <div className="load-modal-background">
        <div className="load-modal-body">
          <div className="load-modal-text">
            <GrClose
              type="button"
              className="load-modal-button"
              onClick={onClick}
            />
            <h3>Meeting Amendment!</h3>

            <p>
              Our January 2024 meetings will instead take place on the 2nd and 4th January of the month. 
              <br/>
              (January 9th and January 23rd)
              <br />
              <br />
              {' '}
              See you soon!
              <br />
              <br />
              {' '}
              Paddington Toastmasters
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
