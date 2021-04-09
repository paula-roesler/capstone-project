import Button from './Button'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Button',
  component: 'Button',
  argTypes: {
    label: { control: 'text' },
    borderWidth: { control: { type: 'number', min: 0, max: 10 } },
    color: {control: {type: 'color'}},
    borderColor: {control: {type: 'color'}},
  }
}

const DefaultButton = (args) => <Button {...args}>{PrimaryButton.args.label}</Button>

export const PrimaryButton = DefaultButton.bind({})
PrimaryButton.args = {
  onClick: action('onClick'),
  label: 'click me',
  borderWidth: 1,
}
