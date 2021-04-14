import { screen, render } from '@testing-library/react'
import ShowWinner from '../ShowWinner'

describe('ShowWinner', () => {
  it('renders the player with the lowest score, also if there are more than one', () => {
    const { container } = render(
      <ShowWinner
        newWinners={[
          { name: 'Sue', overAllScore: 3 },
          { name: 'Joe', overAllScore: 3 },
          { name: 'Izzy', overAllScore: 4 },
        ]}
      />
    )
    expect(screen.getByText('Sue')).toBeInTheDocument()
    expect(screen.getByText('Joe')).toBeInTheDocument()
    expect(screen.queryByText('Izzy')).not.toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
  screen.debug()
})
