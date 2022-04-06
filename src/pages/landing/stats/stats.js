import React from 'react'
import    { Bar, BarChart, CartesianGrid, ResponsiveContainer, LabelList, Legend, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts'

export default function Stats(){


    const data01 = [
        {
          "name": "Communication",
          "value": 350
        },
        {
          "name": "Leadership",
          "value": 300
        },
        {
          "name": "Active Listening",
          "value": 240
        },
        {
          "name": "Impromptu Speaking",
          "value": 200
        },
        {
          "name": "Networking",
          "value": 200
        }
      ];

    window.addEventListener('scroll', reveal)

    let reveals = document.getElementsByClassName('reveal')

    function reveal(){
        for (var i = 0; i < reveals.length; i++) {
       
        // window height of inside window
        let screenheight = window.innerHeight
        //
        let revealsTop = reveals[i].getBoundingClientRect().top;

        let elementVisible = 150;

        if (revealsTop < screenheight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
    }

    return(
        <>
    <section className="reveal fade-bottom active">
        <h1> Top Skills Toastmasters Support Building</h1>
       

        <ResponsiveContainer height={500} width={730}>
        <BarChart layout="vertical" width={530} height={250} data={data01} layout="vertical" >
        <XAxis type="number"/>
        <YAxis dataKey="name" type="category" scale="band" />

    
        <Bar dataKey="value" fill="#772432" />
        </BarChart>
        </ResponsiveContainer>


    </section>
    <section>
    <p>Communication is consistently reported as one of the top skills requested by employers</p>

    </section>
        


        </>
    )
}