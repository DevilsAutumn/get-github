import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Logo } from './Logo.component';

export default {
  title: 'components/Logo',
  component: Logo,
  parameters: {
    backgrounds: { default: 'blue' },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Logo>;

export const Default: ComponentStory<typeof Logo> = () => <Logo />;
