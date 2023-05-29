import React from 'react';

import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@mui/material';
import { theme } from '@theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'green',
    values: [
      {
        name: 'green',
        value: '#5cdb95',
      },
      {
        name: 'blue',
        value: '#002143',
      },
    ],
  },
};

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
