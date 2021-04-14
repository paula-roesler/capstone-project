import { MemoryRouter } from 'react-router-dom'
import { action } from '@storybook/addon-actions'
import HistoryPage from './HistoryPage'

export default {
  title: 'HistoryPage',
  component: 'HistoryPage',
}

const DefaultHistoryPage = args => (
  <MemoryRouter>
    <HistoryPage {...args} />
  </MemoryRouter>
)

export const PageOfHistory = DefaultHistoryPage.bind({})
PageOfHistory.args = {
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
