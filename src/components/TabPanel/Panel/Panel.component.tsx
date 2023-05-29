import React, { FC } from 'react';

import { Box } from '@mui/material';
import { GenericList, UserListTile } from '@components';

import { PanelProps } from './Panel.types';

export const Panel: FC<PanelProps> = (props: PanelProps) => {
  const { value, index, list } = props;
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box>
          <GenericList
            keyExtractor={({ id }) => id}
            data={list}
            renderItem={(follower) => <UserListTile user={follower} />}
          />
        </Box>
      )}
    </Box>
  );
};
