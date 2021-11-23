import React from 'react'
import { Link, Router } from 'react-router-dom'
import { css } from '@emotion/css'

export default function Menu() {
    const MenuArray = [
        {
            menu: [
                { title: 'About PTM', url: 'www.google.com' },
                { title: 'Membership', url: 'www.google.com' },
                { title: 'Pathways', url: 'www.google.com' },
            ],
        },
    ]

    // const menufunct = () => {
    //     for (let i = 0; i < MenuArray.menu[n]. i++) {
    //         return MenuArray.map((item) => (
    //             <div>
    //                 <h5>
    //                     <a>{item.menu.title}</a>
    //                 </h5>
    //             </div>
    //         ))
    //     }
    // }

    const menufunct = () => {
        for (const title in MenuArray) {
            console.log(`MenuArray.${title}`)
            // return MenuArray.map((item) => (
            //     <div>
            //         <h5>
            //             <a>{item.menu.title[0]}</a>
            //         </h5>
            //     </div>
            // ))
        }
    }

    return (
        <>
            <div>{menufunct}</div>
        </>
    )
}

// const object = { a: 1, b: 2, c: 3 }
// for (const [key, value] of Object.entries(object)) {
//     console.log(key, value)
// }
