import { createTheme } from '@mui/material/styles';

export const COLORS = {
  BLUE_1: '#002143',
  BLUE_2: '#053b67',
  BLUE_3: '#43638a',
  GREEN_1: '#00722e',
  GREEN_2: '#00a44f',
  GREEN_3: '#5cdb95',
};

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          ':hover ,:focus': {
            outline: '0.1rem solid white',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          '::-webkit-scrollbar': {
            width: '0.2rem',
          },
          '::-webkit-scrollbar-track': {
            WebkitBoxShadow: 'inset 0 0 6px #fff',
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: COLORS.BLUE_1,
            outline: 'none',
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Lato',
    fontWeightRegular: '400',
    fontWeightBold: '700',
    fontWeightLight: '300',
  },
  palette: {
    primary: {
      dark: COLORS.BLUE_1,
      main: COLORS.BLUE_2,
      light: COLORS.BLUE_3,
    },
    secondary: {
      dark: COLORS.GREEN_1,
      main: COLORS.GREEN_2,
      light: COLORS.GREEN_3,
    },
  },
});
