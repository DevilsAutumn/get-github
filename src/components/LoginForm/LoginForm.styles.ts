import { TextField } from '@mui/material';
import { styled } from '@mui/system';

export const StyledInput = styled(TextField)(({ theme }) => ({
  fontSize: '0.8rem',
  margin: '0.1rem auto',
  borderRadius: '0.4rem',
  outline: 'none',
  minHeight: '5rem',
  [theme.breakpoints.up('xs')]: {
    width: '90%',
  },
  [theme.breakpoints.up('sm')]: {
    width: '20rem',
  },
}));
