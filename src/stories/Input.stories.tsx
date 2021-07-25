import { Meta, Story } from '@storybook/react';
import { useState } from 'react';

import Input, { InputProps } from '../ui/Input';

export default {
  title: 'UI/Text Control',
  component: Input,
  argTypes: {
    value: {
      name: 'value',
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

const Template: Story<InputProps> = ({ value, onChange, ...args }) => {
  const [inputValue, setInputValue] = useState(value);
  const update = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return <Input value={inputValue} onChange={update} {...args} />;
};

export const TextInput = Template.bind({});
TextInput.args = {
  value: 'Hello',
  type: 'text',
};
