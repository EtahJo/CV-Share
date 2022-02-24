import React from 'react';
import { menuInfo } from '../data/menu';
import "../assets/navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbarTitle">
            <h2>CV-SHARE</h2>
        </div>
        <div className="navbarMenu">
            <ul>
                {menuInfo.map((item,index)=>(
                    <div className="menuItems">
                        <li key={index}>{item}</li>
                    </div>
                    
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Navbar