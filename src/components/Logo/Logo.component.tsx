import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { routeConstants } from '@constants';

import { ReactComponent as GithubIcon } from '@assets/icons/github.svg';

export const Logo: FC = () => {
  const { SEARCH } = routeConstants;

  return (
    <NavLink
      to={SEARCH}
      end
      style={{
        textDecoration: 'none',
      }}
      title="Github Profile Finder"
    >
      <Box
        sx={{
          color: (theme) => theme.palette.primary.dark,
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', sm: 'flex-start' },
        }}
      >
        <GithubIcon />
        <Box
          ml="0.2rem"
          display="flex"
          sx={{
            flexDirection: 'column',
          }}
        >
          <Typography
            color="common.white"
            variant="h6"
            fontWeight={700}
            lineHeight={1}
          >
            Github
          </Typography>
          <Typography color="common.white" variant="subtitle2" lineHeight={1}>
            Profile Finder
          </Typography>
        </Box>
      </Box>
    </NavLink>
  );
};
