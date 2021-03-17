import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils'

import GamePage from './GamePage'
// import userEvent from '@testing-library/user-event'
// import Button from '../Button'

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
    expect(container.firstChild).toMatchSnapshot()
  })

  screen.debug()
})
