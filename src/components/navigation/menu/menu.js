import React from 'react'
import ReactDOM from 'react-dom'
import * as URL from '../../utils/routes'
import { Link } from 'react-router-dom'
import './menu.css'

export default function MenuModal({ hidden, onClick }) {
    const menuArray = [
        { title: 'Home', url: URL.ROOT },
        // { title: 'About PTM', url: URL.ABOUT_WHO },
        { title: 'FAQ', url: URL.FAQQ },
    ]

    return ReactDOM.createPortal(
        <div className="modal-wrapper" hidden={hidden}>
            <div className="modal-background">
                <div className="modal-body">
                    <div className="modal-menu-content">
                        <ol>
                        {menuArray.map((item) => (
                            <li>
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
        document.body
    )
}
