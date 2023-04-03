import { AppBar } from '@mui/material';
import { styled } from '@mui/material/styles';

import { DRAWER_WIDTH } from '../Table';

export const StyledAppBar = styled(AppBar)<{ open?: boolean }>(({ theme, open }) => ({
  lexGrow: 1,
  boxSizing: 'border-box',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: DRAWER_WIDTH
  })
}));
