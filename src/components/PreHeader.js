import React from 'react';
import { years } from '../data/menu';
import "../assets/preheader.css"


const PreHeader = () => {
  return (
    <div className='preheader'>
        <div className="preheaderData">
            {years.map((item,index)=>(
                <ul key={index}>
                    <li>{item}</li>
                </ul>
            ))}
        </div>
    </div>
  )
}

export default PreHeader