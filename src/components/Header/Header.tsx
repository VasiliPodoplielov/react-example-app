import React, { useContext } from 'react';

import { Toolbar, Typography } from '@mui/material';

import { AppContext } from 'store';

import { Search } from './components/Search';
import { StyledAppBar } from './Header.styles';

const Header = () => {
  const { isDrawerOpened } = useContext(AppContext);
  return (
    <StyledAppBar position='fixed' open={isDrawerOpened}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant='h6'
        >
          Campaigns
        </Typography>
        <Search />
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
