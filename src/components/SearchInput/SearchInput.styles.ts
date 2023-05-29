import { styled, Input } from '@mui/material';

export const StyledInput = styled(Input)(({ theme }) => ({
  padding: '0.4rem 1.8rem',
  borderRadius: '5rem',
  width: '100%',
  fontSize: '1rem',
  backgroundColor: theme.palette.common.white,
}));
