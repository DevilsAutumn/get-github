import React, { ReactNode } from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { Search } from '@pages';
import { store } from '@store';
import { theme } from '@theme';

const renderedComponent = (component: ReactNode) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>{component}</Provider>
  </ThemeProvider>
);

describe('Should Render Input Element', () => {
  it('Should Render changed Input value', () => {
    render(renderedComponent(<Search />));
    const inputElement = screen.getByPlaceholderText(
      /Search User/i,
    ) as HTMLInputElement;
    fireEvent.change(inputElement, {
      target: {
        value: 'Bhuvnesh Sharma',
      },
    });

    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe('Bhuvnesh Sharma');
  });
});
