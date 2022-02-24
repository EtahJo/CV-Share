import React from 'react';
import "../assets/profile.css";

const Profile = ({name,age,email,pic,status,statement,country}) => {
  return (
    <div className='profile'>
        <div className="profileContent">
            <span>
                <small>Name:</small>
                <strong>{name}</strong>
            </span>
            <span>
                <small>Country:</small>
                <strong>{country}</strong>
            </span>
            <span>
                <small>Age:</small>
                <strong>{age}</strong>
            </span>
            <span>
                <small>Marital Status:</small>
                <strong>{status}</strong>
            </span>
            <span>
                <small>Email:</small>
                <strong>{email}</strong>
            </span>
           
        </div>
        <div className="profilePic">
        
        </div>
    </div>
  )
}

export default Profile