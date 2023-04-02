import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import { SearchIconWrapper, StyledInputBase, StyledSearch } from './Header.styles';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Campaigns
          </Typography>
          <StyledSearch>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
            />
          </StyledSearch>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
