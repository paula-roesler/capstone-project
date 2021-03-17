import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

// import userEvent from '@testing-library/user-event'
// import { createMemoryHistory } from 'history'
import React from 'react'
// import { Router } from 'react-router-dom'

import App from './App'

// it('renders app title', () => {
//   render(
//     <Router>
//       <App />
//     </Router>
//   )
//   expect(screen.getByText('GolfGamer')).toBeInTheDocument()
// })

it('renders the input form', () => {
  render(
    <Router>
      <App />
    </Router>
  )
  expect(screen.getByRole('textbox')).toBeInTheDocument()

  screen.debug()
})

it('input renders first placeholder text, dependent on how many players are set', () => {
  render(
    <Router>
      <App />
    </Router>
  )
  expect(
    screen.getByPlaceholderText('Enter player name (e.g. Joe)')
  ).toBeInTheDocument()

  screen.debug()
})
