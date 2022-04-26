import { Table, TableBody, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { H3 } from '../index';
import { returnCodeToBr } from '../helper.js';
import  "../../assets/css/style.css";
import { careers } from '../index.js';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const createData = ( date, business, language, tool ) => {
  return { date, business, language, tool };
}

const CustomizedTables = (props) => {
  return (
    <>
      <div className="w70 m-0a mt-50">
        <H3
          H3={props.H3}
        />
      </div>
      <TableContainer component={Paper} sx={{ width:'70%', mx:'auto', mt:5, mb:10}}>
        <Table sx={{ width:'100%', minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ width:'25%' }} align="center">{props.Data}</StyledTableCell>
              <StyledTableCell sx={{ width:'25%' }} align="center">{props.Business}</StyledTableCell>
              <StyledTableCell sx={{ width:'25%' }} align="center">{props.Language}</StyledTableCell>
              <StyledTableCell sx={{ width:'25%' }} align="center">{props.Tool}</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {careers.map((item) => (
              <StyledTableRow key={props.business}>
                <StyledTableCell component="th" scope="row">
                  {item.date}
                </StyledTableCell>
                <StyledTableCell align="center">{item.business}</StyledTableCell>
                <StyledTableCell align="right">{item.language}</StyledTableCell>
                <StyledTableCell align="right">{item.tool}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default CustomizedTables;
