import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SearchInput } from './SearchInput.component';

export default {
  title: 'components/SearchInput',
  component: SearchInput,
  argTypes: {
    onChange: { action: '' },
  },
  parameters: {
    backgrounds: { default: 'green' },
  },
} as ComponentMeta<typeof SearchInput>;

export const Default: ComponentStory<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
);
