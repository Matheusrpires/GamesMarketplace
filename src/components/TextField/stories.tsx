import { Story, Meta } from '@storybook/react/types-6-0'
import TextField from '.'
import { Email } from '@styled-icons/material-outlined/Email'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'email',
    id: 'Email',
    initialValue: '',
    placeholder: 'myemail@gmail.com',
    iconPosition: 'left',
    disabled: false
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' }
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

export const withIcon: Story = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

withIcon.args = {
  icon: <Email />
}

export const withError: Story = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

withError.args = {
  ...withIcon.args,
  error: 'Ops... Some error here'
}
