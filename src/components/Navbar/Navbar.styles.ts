import { makeStyles } from '@mui/styles';
import { Theme, List, Toolbar, Box } from '@mui/material';
import { styled } from '@mui/system';

export const activeStyles = makeStyles((theme: Theme) => ({
  active: {
    borderBottom: `0.2rem solid  ${theme.palette.common.white}`,
  },
}));

export const NavlinkWrapper = styled(List)(({ theme }) => ({
  margin: '0 auto',
  justifyContent: 'space-evenly',
  listStyle: 'none',
  [theme.breakpoints.up('xs')]: {
    display: 'block',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

export const ToolbarWrapper = styled(Toolbar, {
  shouldForwardProp: (prop) => prop !== 'menuToggle',
})<{ menuToggle: boolean }>(({ theme, menuToggle }) => ({
  transition: 'left 0.5s ease-in-out',
  minWidth: '15rem',
  top: 0,
  [theme.breakpoints.up('xs')]: {
    justifyContent: 'flex-start',
    paddingTop: '1rem',
    height: '100vh',
    left: menuToggle ? '0' : '-100%',
    position: 'absolute',
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.dark,
  },
  [theme.breakpoints.up('sm')]: {
    justifyContent: 'space-between',
    height: 'auto',
    paddingTop: '0',
    left: 'auto',
    position: 'static',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
}));

export const AppBarWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'sticky',
  boxShadow: 'none',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '10vh',
  margin: '0 auto',
  padding: '0 1rem',
  [theme.breakpoints.up('xs')]: { minWidth: '100%' },
  [theme.breakpoints.up('sm')]: { minWidth: '35rem' },
  [theme.breakpoints.up('md')]: { minWidth: '50rem' },
  [theme.breakpoints.up('lg')]: { minWidth: '70rem' },
}));
