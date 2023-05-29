import { styled, Box } from '@mui/material';

export const StyledMainWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.secondary.light,
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10vh',
}));
