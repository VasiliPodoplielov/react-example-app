import React, { useCallback, useContext, useEffect, useState } from 'react';

import {
  Paper,
  TableContainer,
  Table as MUITable,
  TableBody,
  TableRow,
  TableCell,
  TableHead, TablePagination, Typography, Box
} from '@mui/material';

import { Data } from 'api';

import { AppContext } from 'store/context';

import { DEFAULT_ROWS_PER_PAGE, HEAD_CELLS, ROWS_PER_PAGE_OPTIONS } from './constants';
import TableToolbar from './TableToolbar';

const Table = () => {
  const { list } = useContext(AppContext);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_ROWS_PER_PAGE);
  const [rowsToShow, setRowsToShow] = useState<Data[] | null>(null);

  useEffect(() => {
    const dataToShow = list.slice(0, DEFAULT_ROWS_PER_PAGE);

    setRowsToShow(dataToShow);
  }, [list]);

  const handleChangePage = useCallback(
    (event: unknown, newPage: number) => {
      setPage(newPage);

      const updatedRows = list.slice(
        newPage * rowsPerPage,
        newPage * rowsPerPage + rowsPerPage
      );
      setRowsToShow(updatedRows);
    },
    [list, rowsPerPage]
  );

  const handleChangeRowsPerPage = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const updatedRowsPerPage = parseInt(event.target.value, 10);
      setRowsPerPage(updatedRowsPerPage);

      setPage(0);

      const updatedRows = list.slice(0, updatedRowsPerPage);
      setRowsToShow(updatedRows);
    },
    [list]
  );

  return (
    <Paper>
      {list.length ? (
        <>
          <TableToolbar />
          <TableContainer>
            <MUITable
              sx={{ minWidth: 750 }}
              aria-labelledby='tableTitle'
              size='medium'>
              <TableHead>
                <TableRow>
                  {HEAD_CELLS.map((headCell: any) => (
                    <TableCell
                      key={headCell.id}
                      align={headCell.align}
                      padding='normal'
                      sortDirection='asc'
                    >
                      {headCell.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsToShow ? rowsToShow.map((row: any) => {
                  return (
                    <TableRow
                      tabIndex={-1}
                      key={row.id}
                    >
                      <TableCell align='left'>{row.name}</TableCell>
                      <TableCell align='right'>{row.startDate}</TableCell>
                      <TableCell align='right'>{row.endDate}</TableCell>
                      <TableCell align='right'>{row.budget}</TableCell>
                    </TableRow>
                  );
                }) : null}
              </TableBody>
            </MUITable>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
            component='div'
            count={list.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      ) : (
        <Box sx={{ padding: 2 }}>
          <Typography>Nothing to show</Typography>
        </Box>
      )}
    </Paper>
  );
};

export default Table;
