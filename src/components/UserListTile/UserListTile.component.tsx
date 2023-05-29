import React, { FC } from 'react';

import { useNavigate } from 'react-router-dom';
import { Avatar, Typography, Box, IconButton } from '@mui/material';
import { ReactComponent as CloseIcon } from '@assets/icons/close.svg';
import { routeConstants } from '@constants';

import { UserProp } from './UserListTile.types';
import { UserWrapper } from './UserListTile.styles';

export const UserListTile: FC<UserProp> = ({
  user,
  onRemoveTile,
}: UserProp) => {
  const navigate = useNavigate();
  const isSuggestions = window.location.pathname === '/suggestions';
  const { PROFILE } = routeConstants;

  /**
   * function to open user profile on card click
   */
  const openUserProfile = (name: string) => {
    navigate(`${PROFILE}?username=${name}`);
  };

  return (
    <UserWrapper
      onClick={() => openUserProfile(user.login)}
      id={user.id.toString()}
    >
      <Box display="flex" alignItems="center">
        <Avatar alt={user.login} src={user.avatar_url} title={user.login} />
        <Typography sx={{ paddingLeft: '1rem' }} variant="caption">
          {user.login}
        </Typography>
      </Box>
      {isSuggestions ? (
        <IconButton onClick={(e) => onRemoveTile?.(e, user.id)} title="Remove">
          <CloseIcon height="1rem" width="1rem" />
        </IconButton>
      ) : null}
    </UserWrapper>
  );
};
