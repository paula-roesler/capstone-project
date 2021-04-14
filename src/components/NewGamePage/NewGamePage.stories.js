import { MemoryRouter } from 'react-router-dom'
import { action } from '@storybook/addon-actions'
import NewGamePage from './NewGamePage'

export default {
  title: 'NewGamePage',
  component: 'NewGamePage',
}

const DefaultNewGamePage = args => (
  <MemoryRouter>
    <NewGamePage {...args} />
  </MemoryRouter>
)

export const PageOfNewGame = DefaultNewGamePage.bind({})
PageOfNewGame.args = {
  players: [
    { name: 'Sue', score: 22 },
    { name: 'Joe', score: 18 },
  ],

  addPlayer: action('onAddPlayer'),
  resetHoleOne: action('onStartGame'),
  resetForm: action('onReset'),
}
