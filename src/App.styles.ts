import { styled } from '@mui/material/styles';
import { DRAWER_WIDTH } from 'components/Table';

export const AppWrapper = styled('div')<{ open?: boolean }>(({ theme, open }) => ({
  padding: theme.spacing(10, 2, 2, 2),
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
