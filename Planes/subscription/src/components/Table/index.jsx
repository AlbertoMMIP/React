import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable(props) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {props.columns && props.columns.map((c,i) => (
              <TableCell key={i}>{c}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row,i) => (
            <TableRow key={i}>
              {props.columns && props.columns.map((c,i) => (
                <TableCell align="left" key={i}>{row[c]}</TableCell>
              ))}              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
