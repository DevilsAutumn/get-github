import React, { FC } from 'react';

import { Navigate } from 'react-router-dom';
import { routeConstants } from '@constants';

import { ProtectedRouteProps } from './ProtectedRoute.types';

const { LOGIN } = routeConstants;

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  isAuthenticated,
  navigateTo,
  outlet,
}: ProtectedRouteProps) => {
  if (isAuthenticated) {
    return outlet;
  }
  return <Navigate to={{ pathname: navigateTo || LOGIN }} />;
};
