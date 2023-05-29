import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NavlinkItem } from './NavlinkItem.component';

export default {
  title: 'subcomponents/NavlinkItem',
  component: NavlinkItem,
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
} as ComponentMeta<typeof NavlinkItem>;

export const DefaultNavlinkItem: ComponentStory<typeof NavlinkItem> = (
  args,
) => <NavlinkItem {...args} />;

DefaultNavlinkItem.args = {
  navlink: {
    navigationTitle: 'Search',
    path: '/Search',
    showOnAuth: true,
  },
};
