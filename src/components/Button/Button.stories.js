import Button from './Button'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Button',
  component: 'Button',
}

const DefaultButton = (args) => <Button {...args}>Click me</Button>

export const PrimaryButton = DefaultButton.bind({})

PrimaryButton.args = {
  onClick: action('onClick')
}