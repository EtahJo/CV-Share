import React from 'react';
import "../assets/education.css";

const Education = ({institution,duration,certificate,major,createdAt,year}) => {
  return (
    <div className='education'>
        <div className="educationYear">
            <p>Duration</p>
            <h2>{duration}</h2>
        </div>
        <div className="educationInsti">
            <p>Institution</p>
            <h3>{institution}</h3>
        </div>
        <div className="educationMajor">
            <p>Major</p>
            <h3>{major}</h3>
        </div>
        <div className="educationCerti">
            <p>Certificate</p>
            <h3>{certificate}</h3>
        </div>
    </div>
  )
}

export default Education