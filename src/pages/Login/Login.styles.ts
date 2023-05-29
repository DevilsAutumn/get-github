import { Box, Grid } from '@mui/material';
import { styled } from '@mui/system';

export const LoginWrapper = styled(Box)({
  minHeight: '80%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBlock: '3rem',
});

export const commonGridProps = {
  item: true,
  xs: 12,
  md: 6,
};

export const GridItem = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
});
