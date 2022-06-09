import React from 'react'
import AdminDashboard from './AdminDashboard'
import StudentDashboard from './StudentDashboard'
import FacultyDashboard  from './FacultyDashboard'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const DashBoard = () => {
  const navigate = useNavigate()
  let users = JSON.parse(localStorage.getItem('user')) || null;
if(users !=null){
  users = users.user.role
  console.log('users:', users)
}

const handleNavigate2=()=>{
  navigate("/signin")
}
  return (
    <div style={{marginTop:"80px"}}>
{users==="student"?<StudentDashboard /> :users==="admin"? <AdminDashboard />:users==="faculty"? <FacultyDashboard />:<Button onClick={()=>handleNavigate2()} variant="outlined">Login First</Button>}
       
        
       
    </div>
  )
}

export default DashBoard