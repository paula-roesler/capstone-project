import { MemoryRouter } from 'react-router-dom'
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
    {
      dateOfGame: 'Wed, Apr 14, 2021, 3:40 PM',
      players: [
        {
          name: 'Sue',
          score: 17,
          holes: [
            { name: '1', score: 3 },
            { name: '2', score: 6 },
            { name: '3', score: 8 },
          ],
        },
        {
          name: 'Joe',
          score: 21,
          holes: [
            { name: '1', score: 5 },
            { name: '2', score: 7 },
            { name: '3', score: 9 },
          ],
        },
      ],
    },
    {
      dateOfGame: 'Tue, Apr 13, 2021, 1:10 PM',
      players: [
        {
          name: 'Hans',
          score: 19,
          holes: [
            { name: '1', score: 7 },
            { name: '2', score: 6 },
            { name: '3', score: 6 },
          ],
        },
        {
          name: 'Gitte',
          score: 22,
          holes: [
            { name: '1', score: 8 },
            { name: '2', score: 7 },
            { name: '3', score: 7 },
          ],
        },
      ],
    },
  ],
}
