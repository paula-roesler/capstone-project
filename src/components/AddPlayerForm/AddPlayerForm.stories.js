import AddPlayerForm from './AddPlayerForm'
import { action } from '@storybook/addon-actions'

export default {
  title: 'AddPlayerForm',
  component: 'AdAddPlayerForm',
  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
  },
}

export const defaultAddPlayerForm = () => <AddPlayerForm />
