import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import HistoryEntry from './HistoryEntry'

describe('HistoryEntry', () => {
  it('renders a button with the date of the saved game', () => {
    render(<HistoryEntry />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('clicking the button toggles a saved event', () => {
    const players = [
      {
        name: 'Sue',
        overallScore: '19',
        holes: [
          { name: 1, score: 3 },
          { name: 2, score: 5 },
          { name: 3, score: 4 },
        ],
      },
      {
        name: 'Jack',
        overallScore: '22',
        holes: [
          { name: 1, score: 4 },
          { name: 2, score: 6 },
          { name: 3, score: 4 },
        ],
      },
    ]
    render(<HistoryEntry players={players} />)
    const button = screen.getByRole('button')

    userEvent.click(button)
    expect(screen.getByTestId('arrowdown')).toBeInTheDocument()
    expect(screen.queryByText('Sue')).toBeInTheDocument()
    expect(screen.queryByText('Jack')).toBeInTheDocument()
  })

  screen.debug()
})
