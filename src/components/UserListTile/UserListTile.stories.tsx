import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import { Story, Meta } from '@storybook/react';
import { UserListTile } from './UserListTile.component';

import { UserProp } from './UserListTile.types';

export default {
  title: 'components/UserListTile',
  component: UserListTile,
  parameters: {
    backgrounds: { default: 'green' },
  },
  decorators: [
    (Comp) => (
      <MemoryRouter>
        <Comp />
      </MemoryRouter>
    ),
  ],
} as Meta<typeof UserListTile>;

const UserTemplate: Story<UserProp> = (args) => <UserListTile {...args} />;

export const Default = UserTemplate.bind({});

Default.args = {
  user: {
    id: 10,
    login: 'DevilsAutumn',
    html_url: 'https://github.com/DevilsAutumn',
    location: 'India',
    name: 'Bhuvnesh',
    avatar_url: 'https://avatars.githubusercontent.com/u/83907321?v=4',
    followers: 30,
    following: 40,
    followers_url: 'https://api.github.com/users/DevilsAutumn/followers',
  },
};
