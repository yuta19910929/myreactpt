import React from 'react';
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { H3 } from '../index';
import { careers } from '../../data/Data';
import { commonType } from '../../types/common';
import { returnCodeToBr } from '../helper';

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

const CustomizedTables = (props: commonType) => {
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
              <StyledTableRow key={item.business}>
                <StyledTableCell component="th" scope="row">
                  {returnCodeToBr(item.date)}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {returnCodeToBr(item.business)}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {returnCodeToBr(item.language)}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {returnCodeToBr(item.tool)}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default CustomizedTables;
