import { render, screen } from '@testing-library/react'
import App from './App'

it('renders the input form', () => {
  render(<App />)
  expect(screen.getByRole('textbox')).toBeInTheDocument()

  screen.debug()
})

it('input renders first placeholder text, dependent on how many players are set', () => {
  render(<App />)
  expect(
    screen.getByPlaceholderText('Players name goes here (min. 2 players)')
  ).toBeInTheDocument()

  screen.debug()
})
