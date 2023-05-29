import React, { FC } from 'react';

import { Box } from '@mui/material';

import { SearchInputProps } from './searchInput.types';
import { StyledInput } from './SearchInput.styles';

export const SearchInput: FC<SearchInputProps> = ({ onChange, onClick }) => (
  <Box
    position="relative"
    display="flex"
    justifyContent="center"
    mt="2rem"
    mx="auto"
  >
    <StyledInput
      name="username"
      type="string"
      placeholder="Search User"
      autoComplete="off"
      onChange={(e) => onChange(e)}
      onClick={onClick}
      disableUnderline
    />
  </Box>
);
