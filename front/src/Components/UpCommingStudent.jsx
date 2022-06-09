import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getEvent, getEventUp } from '../Redux/Event/action';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
const UpCommingStudent = () => {
    const navigate=useNavigate()
const dispatch = useDispatch()
const {upcomming} = useSelector((store)=>store.event)





    useEffect(() =>{

dispatch(getEventUp())
    },[])

    const handleRegister=()=>{
navigate("/eventregister")
    }
  return (
    <div>
    
        <Typography variant="h6" gutterBottom component="div">
        UpComming event
      </Typography>

          <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650, mt:5 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Event Name</TableCell>
          <TableCell align="right">Start Date</TableCell>
          <TableCell align="right">End Date</TableCell>
          <TableCell align="right">type</TableCell>
          <TableCell align="right">Event info</TableCell>
          <TableCell align="right">image</TableCell>
          <TableCell align="right">Register</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {upcomming && upcomming.map((row) => (
          <TableRow
            key={row._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.eventName}
            </TableCell>
            <TableCell align="right">{row.startDate}</TableCell>
            <TableCell align="right">{row.endDate}</TableCell>
            <TableCell align="right">{row.type}</TableCell>
            <TableCell  style={{width: '30vw'}} align="right">{row.eventInfo}</TableCell>
             <TableCell align="right"><img style={{height: '100px'}} src ={row.image} /></TableCell>
             <TableCell align="right">   <Button onClick={()=>handleRegister()} variant="outlined">Register Now</Button> </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    </div>
  )
}

export default UpCommingStudent