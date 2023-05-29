import React, { FC } from 'react';

import { CircularProgress } from '@mui/material';

import { LoadingSpinnerWrapper } from './LoadingSpinner.styles';

export const LoadingSpinner: FC = () => (
  <LoadingSpinnerWrapper>
    <CircularProgress />
  </LoadingSpinnerWrapper>
);
