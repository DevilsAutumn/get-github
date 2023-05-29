import React, { FC, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Grid, Card, Typography } from '@mui/material';
import {
  setCredential,
  loginOnGithub,
  setFollowers,
  setFollowing,
} from '@redux/login.slice';
import { setSuggestions } from '@redux/suggestions.slice';
import { globalConstants, routeConstants } from '@constants';
import { LoadingSpinner, LoginForm } from '@components';
import { AppDispatch } from '@store';

import { ReactComponent as LoginImg } from '@assets/images/login.svg';
import { commonGridProps, GridItem, LoginWrapper } from './Login.styles';

export const Login: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { SUGGESTIONS_PER_PAGE } = globalConstants;
  const { PROFILE, LOGIN } = routeConstants;

  /**
   * function to handle submission of login form
   * @param accesstoken - accesstoken entered by user.
   */
  const submitLoginForm = async (accesstoken: string) => {
    dispatch(loginOnGithub(accesstoken))
      .unwrap()
      .then((response) => {
        if (response.status === 200) {
          dispatch(
            setCredential({
              isLoggedIn: true,
              user: response.data,
              accessToken: accesstoken,
              followers: [],
              following: [],
            }),
          );
          dispatch(setFollowers(response.data.login));
          dispatch(setFollowing(response.data.login));
          dispatch(
            setSuggestions({
              perPage: SUGGESTIONS_PER_PAGE,
              page: 1,
            }),
          ).then(() => {
            setIsLoading(false);
            navigate(PROFILE);
          });
        } else {
          setIsLoading(false);
          navigate(LOGIN);
        }
      });
  };

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <LoginWrapper>
      <Grid container spacing="2rem">
        <GridItem
          {...commonGridProps}
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            padding: '0.5rem ',
          }}
        >
          <LoginImg width="90%" height="90%" />
        </GridItem>
        <GridItem {...commonGridProps}>
          <Card
            elevation={5}
            sx={{
              width: { xs: '80%', sm: '100%' },
              maxWidth: { xs: 'initial', md: '26rem' },
              margin: '0 auto',
            }}
          >
            <Typography my={4} textAlign="center" variant="h5" color="primary">
              Login Here
            </Typography>
            <LoginForm onSubmit={submitLoginForm} setIsLoading={setIsLoading} />
          </Card>
        </GridItem>
      </Grid>
    </LoginWrapper>
  );
};
