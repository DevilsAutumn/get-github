import React, { FC, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  IconButton,
  Typography,
  ListItem,
  Button,
  AppBar,
} from '@mui/material';
import { Logo, UserInitialState } from '@components';
import { setCredential } from '@redux/login.slice';
import { clearSuggestions } from '@redux/suggestions.slice';
import { routeConstants } from '@constants';
import { RootState } from '@store';

import { ReactComponent as MenuIcon } from '@assets/icons/hamburger.svg';
import { ReactComponent as MenuClose } from '@assets/icons/menuclose.svg';
import { NavlinkItem } from './NavlinkItem';
import { AppBarWrapper, NavlinkWrapper, ToolbarWrapper } from './Navbar.styles';

export const Navbar: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { PROFILE, SEARCH, LOGIN, SUGGESTIONS } = routeConstants;
  const isAuthenticated = useSelector(
    (store: RootState) => store.data.credentials.isLoggedIn,
  );
  const NavLinks = [
    {
      navigationTitle: 'Search',
      path: SEARCH,
      showOnAuth: true,
    },
    {
      navigationTitle: 'Login',
      path: LOGIN,
      showOnAuth: !isAuthenticated,
    },
    {
      navigationTitle: 'Profile',
      path: PROFILE,
      showOnAuth: isAuthenticated,
    },
    {
      navigationTitle: 'Suggestions',
      path: SUGGESTIONS,
      showOnAuth: isAuthenticated,
    },
  ];

  /**
   * function to handle toggling of menu on small screen
   */
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  /**
   * function to logout the user and reset the store and local storage
   */
  const logOutUser = () => {
    dispatch(
      setCredential({
        isLoggedIn: false,
        user: UserInitialState,
        accessToken: '',
        followers: [],
        following: [],
      }),
    );
    dispatch(clearSuggestions());
    navigate(SEARCH);
  };

  return (
    <AppBar>
      <AppBarWrapper>
        <Logo />
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            display: { sm: 'none' },
            padding: (theme) => theme.typography.pxToRem(4),
          }}
          title={mobileOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileOpen ? <MenuClose /> : <MenuIcon />}
        </IconButton>
        <ToolbarWrapper menuToggle={mobileOpen}>
          <Box
            sx={{
              display: 'block',
            }}
          >
            <NavlinkWrapper>
              {NavLinks.map((obj) => (
                <NavlinkItem
                  key={obj.path.length}
                  navlink={obj}
                  onClick={setMobileOpen}
                />
              ))}
              {isAuthenticated ? (
                <ListItem sx={{ justifyContent: 'center' }}>
                  <Button onClick={logOutUser} title="Logout">
                    <Typography color="common.white" variant="body1">
                      Logout
                    </Typography>
                  </Button>
                </ListItem>
              ) : null}
            </NavlinkWrapper>
          </Box>
        </ToolbarWrapper>
      </AppBarWrapper>
    </AppBar>
  );
};
