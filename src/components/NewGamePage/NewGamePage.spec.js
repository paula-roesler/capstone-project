import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddPlayerForm from '../AddPlayerForm'

describe('NewGamePage', () => {
  it('renders a form with one input and a button', () => {
    render(<AddPlayerForm />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('check if Button renders', () => {
    const { queryByTitle } = render(<AddPlayerForm />)
    const btn = queryByTitle('addPlayerButton')
    expect(btn).toBeTruthy()
  })

  it('checks the input', () => {
    render(<AddPlayerForm />)

    userEvent.type(screen.getByRole('textbox'), 'Sue')
    expect(screen.getByRole('textbox')).toHaveValue('Sue')
  })

  screen.debug()
})
