import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as URL from '../../utils/routes'
import { Link } from 'react-router-dom'
import './menu.css'


export default function MenuModal({hidden, onClick}) {


  const menuArray = [
    { title: 'Home', url: URL.ROOT },
    { title: 'About PTM', url: URL.ABOUT },
    { title: 'FAQ', url: URL.FAQQ },
]



    return ReactDOM.createPortal (
      <div className="modal-wrapper">
      <div className="modal-background" hidden={hidden}>
      <div className="modal-body">
        <div className="modal-menu-content">
                 {menuArray.map((item) => (
                  <li>
                    <Link onClick={onClick} to={item.url }>{item.title}</Link>
                  </li>
                ))}
           </div>
      </div>
      </div>
      </div>,
    document.body) 
}

