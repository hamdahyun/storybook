import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from "./Button";


export default {
  title: 'Button',
  component: Button,
} as Meta<typeof Button>;

export const Default: Story = (args) => 
<Button btnType="ty1" {...args}>
  버튼
</Button>;
