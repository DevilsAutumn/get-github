import React, { FC, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid, Typography, Button } from '@mui/material';
import { GenericList, LoadingSpinner, UserListTile } from '@components';
import { setSuggestions, removeSuggestion } from '@redux/suggestions.slice';
import { globalConstants } from '@constants';
import { AppDispatch, RootState } from '@store';

import { ReactComponent as SuggestionImg } from '@assets/images/suggestions.svg';
import { commonGridProps, GridItem, ImageWrapper } from './Suggestions.styles';

export const Suggestions: FC = () => {
  const { SUGGESTIONS_PER_PAGE } = globalConstants;
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(false);
  const { suggestions } = useSelector((state: RootState) => state.data);

  /**
   * function to refresh suggested user list
   */
  const onRefreshHandler = () => {
    setIsLoading(true);
    dispatch(
      setSuggestions({
        perPage: SUGGESTIONS_PER_PAGE,
        page: suggestions.page + 1,
      }),
    ).then(() => setIsLoading(false));
  };

  /**
   * function to remove user tile.
   * @param {number} id - id of the suggested user tile to remove
   */
  const removeTile = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number,
  ) => {
    e.stopPropagation();
    dispatch(removeSuggestion(id));
    if (suggestions.suggestions.length < SUGGESTIONS_PER_PAGE / 2) {
      dispatch(
        setSuggestions({
          perPage: SUGGESTIONS_PER_PAGE,
          page: suggestions.page + 1,
        }),
      ).then(() => {});
    }
  };

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <Grid container pb="1rem">
      <GridItem {...commonGridProps}>
        <Typography
          variant="h3"
          fontWeight="700"
          mb="1rem"
          mt={{ xs: '1rem', md: '0' }}
          color="common.white"
        >
          Suggestions...
        </Typography>
        <ImageWrapper>
          <SuggestionImg width="100%" height="100%" />
        </ImageWrapper>
      </GridItem>
      <GridItem {...commonGridProps}>
        <Box
          sx={{
            margin: '1rem auto 0',
            width: '100%',
          }}
        >
          <GenericList
            sx={{
              overflow: 'hidden',
            }}
            keyExtractor={({ id }) => id}
            data={suggestions.suggestions.slice(0, 5)}
            renderItem={(user) => (
              <UserListTile user={user} onRemoveTile={removeTile} />
            )}
          />
        </Box>
        <Button variant="contained" onClick={onRefreshHandler}>
          <Typography variant="caption">Refresh</Typography>
        </Button>
      </GridItem>
    </Grid>
  );
};
