import React from 'react';

import { SxProps } from '@mui/system';

export interface GenericListProps<T> {
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => number;
  data: T[];
  sx?: SxProps;
}
