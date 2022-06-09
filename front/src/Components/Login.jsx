import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { auth, getSign } from "../Redux/Auth/action";



const SignInSide = () => {
  const dispatch = useDispatch()
    const navigate =useNavigate()
 const [signinData,setSignin] = useState({
     email:"",
     password:"",
 })
// const signinData = useSelector((store)=>store.user.user)
// console.log("afaf",signinData)
 const handleChange=(e)=>{
let {id,value} = e.target


setSignin({
    ...signinData,
    [id]:value,
})
 }

 const handleSubmit=(e)=>{
     e.preventDefault()
    
    dispatch(getSign(signinData,navigate))

  
  
 }
  return (
    <div style={{marginTop:"100px",width:"40%",marginLeft:"25%"}}>
    <Container component="main" maxWidth="xs">
   <form onSubmit={handleSubmit}>
   <Avatar style={{backgroundColor:"#f50057",marginLeft:"45%"}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          Sign In
          </Typography>
  <Grid container spacing={2}>
  <Grid item xs={12} >
            <TextField
             onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              
            />
             </Grid>

             <Grid item xs={12}>
            <TextField
            onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
              </Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              
            >
              Sign In
            </Button>
            <ToastContainer />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
           
            </Grid>
           </form>
           </Container>
           </div>
        
  );
};

export default SignInSide;
