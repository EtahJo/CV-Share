import React from 'react';
import "../assets/profile.css";
import Avatar from '@mui/material/Avatar';

const LastLayer = () => {
  return (
    <div className='profilePic'>
        <Avatar 
        alt="Joso"
        src="https://lh3.googleusercontent.com/ogw/ADea4I62ZAh1QgRpC49Y099zkFlGGm9lD2bqrPf-GtNS2Q=s32-c-mo"
        sx={{ width: 200, height: 200 }}
        className="avatar"
        />
        <h3>I enjoy being creative and learning new skilss</h3>
    </div>
  )
}

export default LastLayer