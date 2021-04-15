import { MemoryRouter } from 'react-router-dom'
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

export const EntryOfHistory = DefaultHistoryEntry.bind({})
EntryOfHistory.args = {
  dateOfGame: 'Wed, Apr 14, 2021, 3:40 PM',
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
}
