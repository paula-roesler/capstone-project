import { action } from '@storybook/addon-actions'
import AddPlayerForm from './AddPlayerForm'

export default {
  title: 'AddPlayerForm',
  component: 'AdAddPlayerForm',
  argTypes: {
    borderColor: { control: 'color' },
  },
}

const DefaultAddPlayerForm = args => <AddPlayerForm {...args} />

export const PlayerForm = DefaultAddPlayerForm.bind({})
PlayerForm.args = {
  onAddPlayer: action('onClick'),
  backgroundColor: 'red',
}
