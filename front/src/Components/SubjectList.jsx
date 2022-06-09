
import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getAssignment } from '../Redux/Academics/action';



const SubjectList = () => {
const dispatch = useDispatch()
const {assign} =useSelector((store)=>store.academics)

console.log('assign:', assign)
    useEffect(() => {
dispatch(getAssignment())
    },[])
  return (
    <div>

<TableContainer component={Paper}>
    <Table sx={{ minWidth: 650, mt:5 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Subject Name</TableCell>
          <TableCell align="right">Assignment</TableCell>
          <TableCell align="right">Start Date</TableCell>
          <TableCell align="right">End Date</TableCell>
         
         
      
        
        </TableRow>
      </TableHead>
      <TableBody>
        {assign && assign.map((row) => (
          <TableRow
            key={row._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.subject_id.subjectName}
            </TableCell>
             <TableCell align="right">{row.title}</TableCell>
            <TableCell align="right">{row.startDate}</TableCell>
            <TableCell align="right">{row.endDate}</TableCell>
            <TableCell align="right">{row.type}</TableCell>
          
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    </div>
  )
}

export default SubjectList