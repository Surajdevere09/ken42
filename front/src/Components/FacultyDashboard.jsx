import React from 'react'
import Typography from '@mui/material/Typography';
import SubjectList from './SubjectList';


const FacultyDashboard = () => {
  return (
    <div>
         <Typography variant="h3" gutterBottom component="div">
    Faculty Dashboard
      </Typography>
<SubjectList />

    </div>
  )
}

export default FacultyDashboard