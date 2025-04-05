import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Plus } from 'lucide-react';

const meta = {
  title: 'Watervrienden/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'primary',
    disabled: false,
    icon: null,
    label: 'Button',
    shadow: false,
    type: 'button',
    onClick: () => {}
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
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
    shadow: false,
    type: 'button',
    onClick: () => {}
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
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
    shadow: false,
    type: 'button',
    onClick: () => {}
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
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
    shadow: true,
    type: 'button',
    onClick: () => {}
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button {...args} color='primary' label='Primary' />
      <Button {...args} color='secondary' label='Secondary' />
    </div>
  ),
};
