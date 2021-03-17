import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NewGamePage from './NewGamePage'
import AddPlayerForm from '../AddPlayerForm'
import Button from '../Button'

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

  //   it('applies the name of the player to the submit callback', () => {
  //     const callback = jest.fn()
  //     render(<AddPlayerForm onAddPLayer={callback} />)
  //     userEvent.type(screen.getByLabelText('Add player:'), 'Sue')
  //     userEvent.click(screen.getByRole('button'))
  //     expect(callback).toHaveBeenCalledWith({ nameOfPlayer: 'Sue' })
  //   })

  screen.debug()
})
