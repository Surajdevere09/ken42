import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getEvent } from '../Redux/Event/action';

const EventList = () => {
const dispatch = useDispatch()
const {rows} = useSelector((store)=>store.event)




console.log('rows:', rows)
    useEffect(() =>{

dispatch(getEvent())
    },[])
  return (
    <div>
        <h1>Ongoing event</h1>
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
        </TableRow>
      </TableHead>
      <TableBody>
        {rows && rows.map((row) => (
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
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    </div>
  )
}

export default EventList