import React, { useState, FC, useRef } from 'react';

import { useDispatch } from 'react-redux';
import { debounce } from 'lodash';
import { Fab, Box } from '@mui/material';
import { UserType, SearchInput, GenericList, UserListTile } from '@components';
import { globalConstants } from '@constants';
import { AppDispatch } from '@store';
import { searchOnGithub } from '@redux/search.slice';

import { ReactComponent as CloseIcon } from '@assets/icons/close.svg';

export const Search: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [users, setUsers] = useState<UserType[]>([]);
  const [isListShowing, setListShowing] = useState(false);
  const { DEBOUNCE_DELAY } = globalConstants;

  const debouncedSearch = useRef(
    debounce((criteria) => {
      dispatch(searchOnGithub(criteria))
        .unwrap()
        .then((response) => {
          if (response.status === 200) setUsers(response.data.items);
          else {
            setUsers([]);
          }
        });
    }, DEBOUNCE_DELAY),
  ).current;

  /**
   * function to call debounced search function
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - change event triggered
   */
  const performSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setListShowing(true);
    if (e.target.value.trim() === '') setUsers([]);
    else debouncedSearch(e.target.value);
  };

  /**
   * function to open search result list when starting search
   */
  const openSearchList = () => {
    setListShowing(true);
  };

  /**
   * function  to close search result list on close button click
   */
  const closeSearchList = () => {
    setListShowing(false);
  };

  return (
    <>
      <SearchInput onChange={performSearch} onClick={openSearchList} />
      {isListShowing ? (
        <>
          <Box
            sx={{
              backgroundColor: (theme) => theme.palette.common.white,
              borderRadius: '0.4rem',
            }}
          >
            <GenericList
              keyExtractor={({ id }) => id}
              data={users}
              renderItem={(user) => <UserListTile user={user} />}
            />
          </Box>
          <Box textAlign="center">
            <Fab
              size="medium"
              color="default"
              aria-label="add"
              onClick={closeSearchList}
              title="Close Search"
            >
              <CloseIcon />
            </Fab>
          </Box>
        </>
      ) : null}
    </>
  );
};
