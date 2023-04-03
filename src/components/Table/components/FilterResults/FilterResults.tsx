import React, { useContext } from 'react';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Divider, Drawer, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import { AppContext } from 'store/context';

import { DRAWER_WIDTH } from './constants';
import { DrawerHeader } from './FilterResults.styles';

const FilterResults = () => {
  const { isDrawerOpened, toggleDrawer } = useContext(AppContext);

  return (
    <>
      <Tooltip title='Filter results'>
        <IconButton
          edge='end'
          onClick={toggleDrawer}
        >
          <FilterListIcon />
        </IconButton>
      </Tooltip>
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH
          }
        }}
        variant='persistent'
        anchor='right'
        open={isDrawerOpened}
      >
        <DrawerHeader>
          <IconButton onClick={toggleDrawer}>
            <ChevronRightIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
      </Drawer>
    </>
  );
};

export default FilterResults;
