import React, { FC } from 'react';

import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Search, Profile, Suggestions, Login } from '@pages';
import { routeConstants } from '@constants';
import { RootState } from '@store';
import { ProtectedRoute } from '@components';

export const PublicRoute: FC = () => {
  const { BASE, SEARCH, LOGIN, PROFILE, SUGGESTIONS } = routeConstants;
  const { isLoggedIn } = useSelector(
    (state: RootState) => state.data.credentials,
  );

  return (
    <Routes>
      <Route path={SEARCH} element={<Search />} />
      <Route path={PROFILE} element={<Profile />} />
      <Route
        path={LOGIN}
        element={
          <ProtectedRoute
            navigateTo={PROFILE}
            outlet={<Login />}
            isAuthenticated={!isLoggedIn}
          />
        }
      />
      <Route
        path={SUGGESTIONS}
        element={
          <ProtectedRoute
            outlet={<Suggestions />}
            isAuthenticated={isLoggedIn}
          />
        }
      />
      <Route path={BASE} element={<Navigate replace to={SEARCH} />} />
    </Routes>
  );
};
