import { action } from '@storybook/addon-actions'
import Button from './Button'

export default {
  title: 'Button',
  component: 'Button',
  argTypes: {
    width: {
      control: { type: 'range', min: 400, max: 1200, step: 50 },
    },
  },
}

const DefaultButton = args => <Button {...args}>{args.label}</Button>

export const PrimaryButton = DefaultButton.bind({})
PrimaryButton.args = {
  onClick: action('onClick'),
  label: 'click me',
  width: '600',
}
