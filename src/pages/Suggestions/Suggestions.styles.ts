import { Grid, Box } from '@mui/material';
import { styled } from '@mui/system';

export const GridItem = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
});

export const ImageWrapper = styled(Box)(({ theme }) => ({
  width: '60%',
  height: '50%',
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

export const commonGridProps = {
  item: true,
  xs: 12,
  md: 6,
};
