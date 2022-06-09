import React from 'react'
import { Button, CardActionArea, CardActions } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from 'react-router-dom';
const PageNotFound = () => {
    const navigate = useNavigate()
    const handleNavigate=()=>{
        navigate("/")
    }
  return (
    <div style={{marginTop:"100px"}}> 
 <Typography gutterBottom variant="h3" component="div">
     Page Not Found
     </Typography>
        <img style={{width:"750px",height:"450px"}} src="https://cdn.dribbble.com/users/605899/screenshots/4144886/media/47ae8417ee638d039a4b7300439ea061.gif" /><br />
        <Button onClick={()=>handleNavigate()} variant="contained" color="primary">
    GoHome
   </Button>
    </div>
  )
}

export default PageNotFound