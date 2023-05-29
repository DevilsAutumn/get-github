import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';
import { Typography, ListItem } from '@mui/material';

import { NavlinkItemProps } from './NavlinkItem.types';
import { activeStyles } from '../Navbar.styles';

export const NavlinkItem: FC<NavlinkItemProps> = (props) => {
  const classes = activeStyles();
  const { navigationTitle, path, showOnAuth } = props.navlink;

  return showOnAuth ? (
    <ListItem sx={{ justifyContent: 'center' }}>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : '')}
        to={path}
        style={{
          textDecoration: 'none',
          lineHeight: '0',
          padding: '0.2rem 0.4rem',
        }}
        onClick={() => props.onClick(false)}
        title={navigationTitle}
      >
        <Typography color="common.white" variant="body1">
          {navigationTitle}
        </Typography>
      </NavLink>
    </ListItem>
  ) : null;
};
