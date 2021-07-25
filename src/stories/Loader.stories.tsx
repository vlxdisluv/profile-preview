import { Meta, Story } from '@storybook/react';

import Loader, { LoaderProps } from '../ui/Loader';

export default {
  title: 'UI/Loader',
  component: Loader,
} as Meta;

const Template: Story<LoaderProps> = args => <Loader {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: '#444444',
};
