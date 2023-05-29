import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Footer } from './Footer.component';

export default {
  title: 'components/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const Default: ComponentStory<typeof Footer> = () => <Footer />;
