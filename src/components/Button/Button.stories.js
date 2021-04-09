import Button from './Button'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Button',
  component: 'Button',
  parameters: { actions: { argTypesRegex: '^on.*' } },
}

export const defaultButton = () => <Button>test</Button>
