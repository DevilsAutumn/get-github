import React from 'react';

import { Typography, Box } from '@mui/material';

import { GenericListWrapper } from './GenericList.styles';
import { GenericListProps } from './GenericList.types';

/* prettier-ignore */
export const GenericList = <T extends unknown>({
  renderItem,
  keyExtractor,
  data,
  sx,
}: GenericListProps<T>):JSX.Element => (
    <GenericListWrapper sx={sx} elevation={2}>
      {
        data.length === 0 ? (
          <Typography
            variant="subtitle1"
            textAlign="center"
          >
        No User Found
          </Typography>
        ) : (
          data.map((item) => (
            <Box tabIndex={0} key={keyExtractor(item)}>{renderItem(item)}</Box>
          )))}
    </GenericListWrapper>
  );
