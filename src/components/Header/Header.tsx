import React from 'react';

import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import { Search } from './components/Search';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Campaigns
          </Typography>
          <Search />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
