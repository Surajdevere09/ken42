import React from 'react'
import Typography from '@mui/material/Typography';
import AcademicsList from './AcademicsList';
import UpCommingStudent from './UpCommingStudent';
const StudentDashboard = () => {
  return (
    <div>
         <Typography variant="h3" gutterBottom component="div">
    Student Dashboard
      </Typography>
 <AcademicsList />
 <UpCommingStudent/>


    </div>
  )
}

export default StudentDashboard