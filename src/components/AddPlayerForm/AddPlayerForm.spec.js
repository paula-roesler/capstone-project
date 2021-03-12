import { screen, render, fireEvent } from '@testing-library/react'
import AddPlayerForm from './AddPlayerForm'

describe('AddPlayerForm', () => {
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

  describe('addPlayer', () => {
    it('applies the name of a player to the submit callback', () => {
      const { queryByTitle } = render(<AddPlayerForm />)
      const input = queryByTitle('addPlayerInput')
      fireEvent.change(input, { target: { value: 'Joe' } })
      expect(input.value).toBe('Joe')

      screen.debug()
    })
  })
})
