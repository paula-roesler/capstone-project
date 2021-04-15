import { MemoryRouter } from 'react-router-dom'
import { action } from '@storybook/addon-actions'
import ShowWinner from './ShowWinner'

export default {
  title: 'ShowWinner',
  component: 'ShowWinner',
}

const DefaultShowWinner = args => (
  <MemoryRouter>
    <ShowWinner {...args} />
  </MemoryRouter>
)

export const ShowTheWinner = DefaultShowWinner.bind({})
ShowTheWinner.args = {
  players: [
    {
      name: 'Sue',
      score: 22,
      holes: [
        { name: '1', score: 3 },
        { name: '2', score: 6 },
        { name: '3', score: 8 },
      ],
    },
    {
      name: 'Joe',
      score: 18,
      holes: [
        { name: '1', score: 5 },
        { name: '2', score: 7 },
        { name: '3', score: 9 },
      ],
    },
  ],

  onReset: action('onPlayAgain'),
  onSave: action('onSaveGame'),
}
