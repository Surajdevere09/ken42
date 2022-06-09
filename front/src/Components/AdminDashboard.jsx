import React, { useEffect } from 'react'
import EventList from './EventList'
import StudentList from './StudentList'
import EventListup from './UpcommingEvent'
import Typography from '@mui/material/Typography';
import  CompletedEvent  from "./CompletedEvent"

const AdminDashboard = () => {


  return (
  <div > 
      <Typography variant="h3" gutterBottom component="div">
    Admin Dashboard
      </Typography>
   <StudentList />
   <EventList />
   <EventListup />
   <CompletedEvent />
     </div>

   
  
  )
}

export default AdminDashboard