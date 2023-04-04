import React, { useContext } from 'react';

import MoreIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { AppContext } from 'store';

const FilterMenu = () => {
  const  { handleClearFields } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClearFields = () => {
    handleClearFields();
    handleClose();
  };

  return (
    <>
      <Tooltip title='Filter menu'>
        <IconButton
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup='true'
          onClick={handleClick}
        >
          <MoreIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <MenuItem onClick={onClearFields}>Clear All Filters</MenuItem>
      </Menu>
    </>
  );
};

export default FilterMenu;
