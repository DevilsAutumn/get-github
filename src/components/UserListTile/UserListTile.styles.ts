import { Card, Button } from '@mui/material';
import { styled } from '@mui/system';

export const UserWrapper = styled(Card)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '95%',
  alignItems: 'center',
  boxShadow: 'none',
  padding: '0.5rem',
  margin: '0.2rem auto',
  cursor: 'pointer',
  ':focus,:hover': {
    outline: 'none',
    backgroundColor: theme.palette.grey[100],
  },
}));

export const StyledButton = styled(Button)({
  fontSize: '0.6rem',
});
