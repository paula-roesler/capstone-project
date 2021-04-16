import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ShowWinner from '../ShowWinner'

describe('ShowWinner', () => {
  it('renders the player with the lowest score, also if there are more than one', () => {
    const players = [
      {
        name: 'Sue',
        overallScore: '12',
        holes: [
          { name: 1, score: 3 },
          { name: 2, score: 5 },
          { name: 3, score: 4 },
        ],
      },
      {
        name: 'Izzy',
        overallScore: '12',
        holes: [
          { name: 1, score: 3 },
          { name: 2, score: 5 },
          { name: 3, score: 4 },
        ],
      },
      {
        name: 'Jack',
        overallScore: '14',
        holes: [
          { name: 1, score: 4 },
          { name: 2, score: 6 },
          { name: 3, score: 4 },
        ],
      },
    ]
    render(
      <MemoryRouter>
        <ShowWinner players={players} />
      </MemoryRouter>
    )
    expect(screen.getByText('Sue')).toBeInTheDocument()
    expect(screen.getByText('Izzy')).toBeInTheDocument()
    expect(screen.queryByText('Jack')).not.toBeInTheDocument()
  })
  screen.debug()
})
