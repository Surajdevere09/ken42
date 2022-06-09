import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getStudents } from '../Redux/Students/action';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



const StudentList = () => {
  let [search,setSearch] = useState("")
    const dispatch = useDispatch();
const {rows,totalStudents} = useSelector((store)=>store.students)
//console.log('students:', rows)


    React.useEffect(()=>{
dispatch(getStudents())
    },[dispatch])

  
    

    const handleChange=(e)=>{
      setSearch(e.target.value)
    }
  return (
    <div> 
  
    <Typography variant="h4" gutterBottom component="div">
    List of students
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
        Total Student : {totalStudents}
      </Typography>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={handleChange} id="outlined-basic" label="Search Students" variant="outlined" />
     
    </Box>
     <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Student Name</TableCell>
          <TableCell align="right">RollNo</TableCell>
          <TableCell align="right">MobileNo</TableCell>
          <TableCell align="right">Term</TableCell>
          <TableCell align="right">Current Year</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows && rows.filter((e)=> e.rollNumber.includes(search) || e.name.firstName.includes(search) || e.name.lastName.includes(search) || e.term.includes(search) || e.currentYear.includes(search) || e.contactNumber.includes(search) ).map((row) => (
          <TableRow
            key={row._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name.firstName} {row.name.lastName}
            </TableCell>
            <TableCell align="right">{row.rollNumber}</TableCell>
            <TableCell align="right">{row.contactNumber}</TableCell>
            <TableCell align="right">{row.term}</TableCell>
            <TableCell align="right">{row.currentYear}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    
     </div>
  )
}

export default StudentList