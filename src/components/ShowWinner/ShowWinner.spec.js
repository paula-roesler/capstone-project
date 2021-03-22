import { screen, render } from '@testing-library/react'
import ShowWinner from '../ShowWinner'

describe('ShowWinner', () => {
  it('renders the player with the lowest score, also if there are more than one', () => {
    const { container } = render(
      <ShowWinner
        players={[
          { name: 'Sue', score: 3 },
          { name: 'Joe', score: 3 },
          { name: 'Izzy', score: 4 },
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
