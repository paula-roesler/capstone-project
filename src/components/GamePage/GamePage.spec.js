import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import GamePage from './GamePage'

describe('GamePage', () => {
  it('renders all added players with score button', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/playing']}>
        <GamePage
          players={[
            { name: 'Sue', score: 10 },
            { name: 'Joe', score: 14 },
          ]}
        />
      </MemoryRouter>
    )

    expect(screen.getByText('Sue')).toBeInTheDocument()
    expect(screen.getByText('Joe')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('End game')).toBeInTheDocument()
    expect(screen.getByText('Show winner!')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  screen.debug()
})
