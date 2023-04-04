import React, { useContext } from 'react';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Box, Divider, Drawer, Grid, Tooltip, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import { MobileDatePicker } from '@mui/x-date-pickers';
import { AppContext } from 'store';

import { DRAWER_WIDTH } from './constants';
import { DrawerHeader } from './FilterResults.styles';

const FilterResults = () => {
  const { isDrawerOpened, toggleDrawer, period, onChangePeriod } = useContext(AppContext);

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
        <DrawerHeader onClick={toggleDrawer} sx={{ cursor: 'pointer' }}>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <Typography variant='body1'>Filter results</Typography>
        </DrawerHeader>
        <Divider />
        <Box sx={{ padding: 2 }}>
          <Typography variant='body1' sx={{ pb: 2 }}>Filter by Period</Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <MobileDatePicker
                label='From'
                value={period.from}
                onChange={(newValue) => onChangePeriod({ ...period, from: newValue })}
                slotProps={{
                  textField: {
                    variant: 'standard',
                    placeholder: ''
                  }
                }}
                closeOnSelect
              />
            </Grid>
            <Grid item xs={6}>
              <MobileDatePicker
                label='To'
                value={period.to}
                onChange={(newValue) => onChangePeriod({ ...period, to: newValue })}
                slotProps={{
                  textField: {
                    variant: 'standard',
                    placeholder: ''
                  }
                }}
                closeOnSelect
              />
            </Grid>
          </Grid>
        </Box>
      </Drawer>
    </>
  );
};

export default FilterResults;
