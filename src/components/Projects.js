import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../assets/projects.css";

export default function ProjectCard({name,language,description,link,image,createdAt}) {
  return (
    <Card sx={{ maxWidth: 250 }} className="project">
      <CardMedia
        component="img"
        alt="Website Image"
        height="140"
        image={image}
        className="projectPic"
      />

      <CardContent className='projectContent'>
      <Typography variant="caption" display="block" gutterBottom className="projectLan">
        {language}
      </Typography>
        <Typography gutterBottom variant="h5" component="div" className="projectName">
         {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" className='projectDes'>
        {description}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom className="projectDate">
        <span>
        <small>Created On: </small>
        <strong>{createdAt}</strong>
        </span>
      </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="large" className='projectButton'><a href={link}>Visit Site</a> </Button>
      </CardActions>
    </Card>
  );
}
