import AddPlayerForm from './AddPlayerForm'
import { action } from '@storybook/addon-actions'

export default {
  title: 'AddPlayerForm',
  component: 'AdAddPlayerForm',
  parameters: {
    actions: {
      handles: ['click .btn'],
    },
  },
}

const DefaultAddPlayerForm = (args) => <AddPlayerForm {...args} />

export const PlayerForm = DefaultAddPlayerForm.bind({})

PlayerForm.args = {
  onAddPlayer: action('onClick')
}