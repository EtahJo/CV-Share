import React from 'react'
import Navbar from '../components/Navbar';
import "../assets/home.css"
import PreHeader from '../components/PreHeader';
import MidLayer from '../components/MidLayer';
import LastLayer from '../components/LastLayer';

const Home = () => {
  return (
    <div className='home'>
      <div className="homePreHeader">
        <PreHeader/>
      </div>
      <div className="homeContent">
      <div className="homeO">

      </div>
      <div className="homeOne">
      <Navbar/>
      </div>
      <div className="homeTwo">
       <MidLayer/>
      </div>
      <div className="homeFour">
     
        </div>
      <div className="homeThree">
        <LastLayer/>
        </div>
      </div>
    </div>
  )
}

export default Home