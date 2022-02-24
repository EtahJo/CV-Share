import React,{useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


import {useMutation} from "@apollo/client";
import {useNavigate} from "react-router-dom";

import "../assets/landingPage.css";
import { REGISTER_USER } from '../graphql';


const LandingPage = () => {
  const navigate = useNavigate();
  const[errors,setErrors] = useState({})
  const[values,setValues]= useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:""
  });
  const[addUser,{loading}] = useMutation(REGISTER_USER,{
    update(_,result){
      console.log(result);
      navigate('/home');
    },
    onError(err){
      setErrors(err.graphQLErrors[0].extensions.errors)
    }
  });
  const onChange = (event) =>{
    setValues({...values,[event.target.name]:event.target.value})
  }
  const onSubmit =(event) =>{
    event.preventDefault();
    addUser({
      variables:{
        registerInput:values
      }
    })
  }
  
  return (
    <div className='landingPage'>
        <div className="landingPageHeader">
            <h1>CV-SHARE</h1>
        </div>
      <div className="landingPageForm  scale-in-left ">
       <form  onSubmit={onSubmit}>
       <div>
         <div className="landingPageButtons">
         <Button variant="contained" size="large" style={{marginRight:"10px"}}>Sign In</Button>
          <Button type="submit" variant="contained" size="large">Sign Up</Button>
         </div>    
          <div className="landingPageRegister">
          <TextField
          required
          id="outlined-required"
          label="Username"
          defaultValue="What is your Username?"
          className='textField'
          name='username'
          value={values.username}
          onChange={onChange}
        />
          <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue="What is your email?"
          className='textField'
          name='email'
          value={values.email}
          onChange={onChange}
        />
           <TextField
           required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          className='textField'
          name='password'
          value={values.password}
          onChange={onChange}
        />
         <TextField
         required
          id="outlined-password-input"
          label=" Confirm Password"
          type="password"
          autoComplete="current-password"
          className='textField'
          name='confirmPassword'
          value={values.confirmPassword}
          onChange={onChange}
        />
    {
      Object.keys(errors).length>0 && (
        <div className="landingPageError">
          <ul>
            {
              Object.values(errors).map(value=>(
                <li key={value}>{value}</li>
              ))
            }
          </ul>
        </div>
      )
    }
    </div>
    </div>
       </form>           
        
      </div>
      <div className="landingPageTagline">
          <h3>Faciliatating the spread of your professional accomplishments</h3>
      </div>
    </div>
  )
}



export default LandingPage