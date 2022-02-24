import React from 'react';
import Profile from './Profile';
import "../assets/midlayer.css";
import Education from './Education';
import ProjectCard from './Projects';


const MidLayer = () => {
  return (
    <div className='midlayer'>
        <div className="midlayerProfile">
            <div className="midlayerHeader">
                <h1>Profile</h1>
            </div>
            <div className="midlayerprofileContent">
                <Profile
                name="Arrah Josephine Etah"
                country="Cameroon"
                age="28"
                status="Single"
                email="arrahetah23@gmail.com"
              
                />
            </div>
        </div>
        <div className="midlayerProject">
        <div className="midlayerHeader">
                <h1>Projects</h1>
            </div>
            <div className="midlayerProContent">
                <ProjectCard
                name="New Website"
                image="https://lequid.es/blog/wp-content/uploads/2018/05/WHAT-IS-THE-CORPORATE-WEBSITE.jpg"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam est, iaculis nec nisi ut, rhoncus efficitur dui. Cras at massa nunc. Vivamus in interdum neque. Suspendisse sagittis metus ante."
                createdAt="2/23/2022"
                language="Javascript,HTML,CSS"
                link="https://www.youtube.com/"
                />
                <ProjectCard
                name="New Website"
                image="https://lequid.es/blog/wp-content/uploads/2018/05/WHAT-IS-THE-CORPORATE-WEBSITE.jpg"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam est, iaculis nec nisi ut, rhoncus efficitur dui. Cras at massa nunc. Vivamus in interdum neque. Suspendisse sagittis metus ante."
                createdAt="2/23/2022"
                language="Javascript,HTML,CSS"
                link="https://www.youtube.com/"
                />
                <ProjectCard
                name="New Website"
                image="https://lequid.es/blog/wp-content/uploads/2018/05/WHAT-IS-THE-CORPORATE-WEBSITE.jpg"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam est, iaculis nec nisi ut, rhoncus efficitur dui. Cras at massa nunc. Vivamus in interdum neque. Suspendisse sagittis metus ante."
                createdAt="2/23/2022"
                language="Javascript,HTML,CSS"
                link="https://www.youtube.com/"
                />
            </div>
        </div>
        <div className="midlayerExperiences">
            <div className="midlayerHeader">
                <h1>Experiences</h1>
            </div>
            <div className="midlayerExpContent">
                
            </div>
        </div>
        <div className="midlayerEducation">
            <div className="midlayerHeader">
                <h1>Education</h1>
            </div>
            <div className="midlayerEduContent">
                <Education
                duration="2012-2013"
                institution="PGSS"
                major="Chemistry"
                certificate="O Levels"
                />
                <Education
                duration="2012-2013"
                institution="PGSS"
                major="Chemistry"
                certificate="O Levels"
                />
                <Education
                duration="2012-2013"
                institution="PGSS"
                major="Chemistry"
                certificate="O Levels"
                />
            </div>
        </div>
    </div>
  )
}

export default MidLayer