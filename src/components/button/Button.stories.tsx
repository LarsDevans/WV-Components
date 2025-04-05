import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Plus } from 'lucide-react';

const meta = {
  title: 'Watervrienden/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'primary',
    disabled: false,
    icon: null,
    label: 'Button',
    outlined: false,
    shadow: false,
    type: 'button',
    onClick: () => {}
  },
  render: (args) => (
    <div className="flex gap-4">
      <Button {...args} color='primary' label='Primary' />
      <Button {...args} color='secondary' label='Secondary' />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    color: 'primary',
    disabled: true,
    icon: null,
    label: 'Button',
    outlined: false,
    shadow: false,
    type: 'button',
    onClick: () => {}
  },
  render: (args) => (
    <div className="flex gap-4">
      <Button {...args} color='primary' label='Primary' />
      <Button {...args} color='secondary' label='Secondary' />
    </div>
  ),
};

export const Icon: Story = {
  args: {
    color: 'primary',
    disabled: false,
    icon: <Plus />,
    label: 'Button',
    outlined: false,
    shadow: false,
    type: 'button',
    onClick: () => {}
  },
  render: (args) => (
    <div className="flex gap-4">
      <Button {...args} color='primary' label='Primary' />
      <Button {...args} color='secondary' label='Secondary' />
    </div>
  ),
};

export const Outlined: Story = {
  args: {
    color: 'primary',
    disabled: false,
    icon: null,
    label: 'Button',
    outlined: true,
    shadow: false,
    type: 'button',
    onClick: () => {}
  },
  render: (args) => (
    <div className="flex gap-4">
      <Button {...args} color='primary' label='Primary' />
      <Button {...args} color='secondary' label='Secondary' />
    </div>
  ),
};

export const Shadow: Story = {
  args: {
    color: 'primary',
    disabled: false,
    icon: null,
    label: 'Button',
    outlined: false,
    shadow: true,
    type: 'button',
    onClick: () => {}
  },
  render: (args) => (
    <div className="flex gap-4">
      <Button {...args} color='primary' label='Primary' />
      <Button {...args} color='secondary' label='Secondary' />
    </div>
  ),
};
