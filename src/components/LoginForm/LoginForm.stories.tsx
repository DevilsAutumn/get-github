import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LoginForm } from './LoginForm.component';

export default {
  title: '.components/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

export const Default: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);
