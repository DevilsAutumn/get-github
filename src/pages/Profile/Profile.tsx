import React, { FC, useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Avatar, Typography, Grid, Box } from '@mui/material';
import {
  TabPanel,
  UserType,
  UserInitialState,
  LoadingSpinner,
} from '@components';
import { getUser, getFollowers, getFollowing } from '@redux/profile.slice';
import { RootState, AppDispatch } from '@store';
import { routeConstants } from '@constants';

import { StatsWrapper, StyledButton } from './Profile.styles';

export const Profile: FC = () => {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { SEARCH, LOGIN } = routeConstants;
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserType>(UserInitialState);
  const [profileFollowers, setFollowers] = useState<UserType[]>([]);
  const [profileFollowing, setFollowing] = useState<UserType[]>([]);
  const { user, followers, following, isLoggedIn } = useSelector(
    (store: RootState) => store.data.credentials,
  );

  useEffect(() => {
    setIsLoading(true);
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('username') === null) {
      if (isLoggedIn) {
        setFollowers(followers);
        setFollowing(following);
        setCurrentUser(user);
        setIsLoading(false);
      } else {
        navigate(LOGIN);
      }
    } else {
      const username = searchParams.get('username')!;
      dispatch(getUser(username))
        .unwrap()
        .then((response) => {
          setCurrentUser(response);
          setIsLoading(false);
        });
      dispatch(getFollowers(username))
        .unwrap()
        .then((response) => setFollowers(response));
      dispatch(getFollowing(username))
        .unwrap()
        .then((response) => {
          setFollowing(response);
          setIsLoading(false);
        });
    }
  }, [
    LOGIN,
    SEARCH,
    dispatch,
    followers,
    following,
    isLoggedIn,
    location.search,
    navigate,
    user,
  ]);

  /**
   * function to navigate to user github profile.
   */
  const viewProfile = () => {
    if (user.html_url !== undefined) window.open(user.html_url);
  };

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <Grid container spacing={1} my="2rem">
      <Grid item xs={12} md={4}>
        <Avatar
          sx={{
            width: {
              xs: '12rem',
              md: '10rem',
            },
            height: {
              xs: '12rem',
              md: '10rem',
            },
            margin: '0 auto',
          }}
          src={currentUser.avatar_url}
          title={currentUser.login}
        />
        <Box display="flex" alignItems="center" flexDirection="column">
          <Typography
            variant="h5"
            color="primary.contrastText"
            fontWeight="bold"
          >
            /{currentUser.login}
          </Typography>
          <Typography variant="h6">{currentUser.name}</Typography>
          <Typography variant="subtitle1">{currentUser.location}</Typography>
          <Typography variant="caption">{currentUser.bio}</Typography>
          <Typography variant="caption">{currentUser.email}</Typography>
          <StatsWrapper>
            <Typography variant="subtitle1" textAlign="center">
              Followers
              <Typography textAlign="center">
                {currentUser.followers}
              </Typography>
            </Typography>
            <Typography variant="subtitle1" textAlign="center">
              Following
              <Typography textAlign="center">
                {currentUser.following}
              </Typography>
            </Typography>
            <Typography variant="subtitle1" textAlign="center">
              Repositories
              <Typography textAlign="center">
                {currentUser.public_repos}
              </Typography>
            </Typography>
          </StatsWrapper>
          <StyledButton
            variant="contained"
            onClick={viewProfile}
            title="View Profile"
          >
            View Profile
          </StyledButton>
          {isLoggedIn && currentUser.login !== user.login ? (
            <StyledButton variant="contained" title="Follow">
              Follow
            </StyledButton>
          ) : null}
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <TabPanel followers={profileFollowers} following={profileFollowing} />
      </Grid>
    </Grid>
  );
};
