import React, { FC } from 'react';

import { Box, Typography } from '@mui/material';

export const Footer: FC = () => (
  <Box
    component="footer"
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: (theme) => theme.palette.primary.dark,
      color: (theme) => theme.palette.common.white,
      minHeight: '10vh',
    }}
  >
    <Typography variant="caption">
      All rights reserved &#169;Github Profile Finder 2023
    </Typography>
  </Box>
);
