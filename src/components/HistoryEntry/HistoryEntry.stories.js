import { MemoryRouter } from 'react-router-dom'
import { action } from '@storybook/addon-actions'
import HistoryEntry from './HistoryEntry'

export default {
  title: 'HistoryEntry',
  component: 'HistoryEntry',
}

const DefaultHistoryEntry = args => (
  <MemoryRouter>
    <HistoryEntry {...args} />
  </MemoryRouter>
)

export const PageOfHistoryEntry = DefaultHistoryEntry.bind({})
PageOfHistoryEntry.args = {
  history: [
    { key: 'id' },
    { dateOfGame: 'dateOfGame' },
    {
      players: [
        { name: 'Sue', score: 22 },
        { name: 'Joe', score: 18 },
      ],
    },
  ],

  // addPlayer: action('onAddPlayer'),
  // resetHoleOne: action('onStartGame'),
  // resetForm: action('onReset'),
}
