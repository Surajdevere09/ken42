import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getAcad } from '../Redux/Academics/action';
import Typography from '@mui/material/Typography';
const AcademicsList = () => {
const dispatch = useDispatch()

const {rows}= useSelector((store)=>store.academics)
console.log('rowsss:', rows)
    React.useEffect(()=>{
        dispatch(getAcad())
    },[])


  return (
    <div>
         <Typography variant="h6" gutterBottom component="div">
    Academics Details
      </Typography>
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Courses</TableCell>
            <TableCell align="right">fee (tax inc.)</TableCell>
            <TableCell align="right">Information</TableCell>
            <TableCell align="right">Image</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">₹{row.fees}/-</TableCell>
              <TableCell style={{width:"400px"}} align="right">{row.info}</TableCell>
              <TableCell  align="right"><img style={{height:"100px"}}  src ={row.image} /></TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}

export default AcademicsList