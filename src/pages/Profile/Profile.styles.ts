import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';

export const ProfileWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  paddingTop: '2rem',
  paddingBottom: '2rem',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '0.4rem',
  padding: '0.5rem',
  color: theme.palette.common.white,
  cursor: 'pointer',
  margin: '0.2rem',
  width: '100%',
  backgroundColor: theme.palette.primary.dark,
}));

export const StatsWrapper = styled(Box)({
  display: 'flex',
  width: '100%',
  maxWidth: '20rem',
  padding: '0',
  justifyContent: 'space-between',
});
