import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LoadingSpinner } from './LoadingSpinner.component';

export default {
  title: 'components/LoadingSpinner',
  component: LoadingSpinner,
  parameters: {
    backgrounds: { default: 'green' },
  },
} as ComponentMeta<typeof LoadingSpinner>;

export const Default: ComponentStory<typeof LoadingSpinner> = () => (
  <LoadingSpinner />
);
