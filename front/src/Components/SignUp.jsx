import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Link from "@mui/material/Link";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { getSignup, register } from '../Redux/Register/action';
const Signup = () => {
  const navigate =useNavigate()
  const [signIn,setSignin] = useState({
    firstName:"",
    lastName:"",
      email:"",
      password:"",
      profile_pic:"https://as1.ftcdn.net/v2/jpg/02/32/71/62/1000_F_232716200_xTsnomMS5djsC6m9cDNQmEKtPgt11Xjo.jpg"

  })
  // const signIn = useSelector((store)=>store.register.usersdata)
  const dispatch = useDispatch();
 


  const handleChange=(e)=>{
 let {id,value} = e.target

 setSignin({
     ...signIn,
     [id]:value,
 })
  }
 
  const handleSubmit=(e)=>{
      e.preventDefault()
      
     dispatch(getSignup(signIn,navigate, toast))
 

  }
  return (
    <div style={{marginTop:"100px",width:"40%",marginLeft:"25%"}}>
  <Container component="main" maxWidth="xs">
 <form onSubmit={handleSubmit}>
 <Avatar style={{backgroundColor:"#f50057",marginLeft:"45%"}}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
<Grid container spacing={2}>
    
         <Grid item xs={12} sm={6}>
              <TextField
              onChange={handleChange}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
         
              <TextField
                 onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                 onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                 onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            
            <Grid item xs={12}>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
           
          >
            Sign Up
          </Button>
          <ToastContainer />
          </Grid>
          <Grid sx={{marginLeft:22}} container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
          </Grid>
            </form>
            </Container>
    </div>
  )
}

export default Signup