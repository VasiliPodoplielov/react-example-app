import React from 'react';

import { Toolbar } from '@mui/material';

import FilterMenu from './components/FilterMenu/FilterMenu';
import { FilterResults } from './components/FilterResults';

const TableToolbar = () => {
  return (
    <Toolbar
      sx={{
        pl: {
          sm: 2
        },
        pr: {
          xs: 1,
          sm: 1
        },
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <FilterResults />
      <FilterMenu />
    </Toolbar>
  );
};

export default TableToolbar;
