// import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { useState } from 'react'
import Grid from './components/Grid'
import AddPlayerForm from './components/AddPlayerForm/AddPlayerForm'
import Player from './components/Player'
import Button from './components/Button'

export default function App() {
  const [players, setPlayers] = useState([])

  return (
    <Grid>
      <AddPlayerForm
        onAddPlayer={addPlayer}
        disabled={players.length >= 4 ? true : false}
        placeholderText={
          players.length >= 4
            ? 'Your flight is complete'
            : 'Players name goes here'
        }
      />
      {players.map(({ name, score }, index) => (
        <Player
          key={index}
          players={name}
          score={score}
          onScore={() => countScore(index)}
        />
      ))}
      <ResetButton
        disabled={players.length <= 0 ? true : false}
        onClick={resetForm}
      >
        Reset
      </ResetButton>
    </Grid>
  )

  function addPlayer({ nameOfPlayer }) {
    setPlayers([{ name: nameOfPlayer, score: 0 }, ...players])
  }

  function countScore(index) {
    const currentPlayer = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score + 1 },
      ...players.slice(index + 1),
    ])
  }

  function resetForm() {
    setPlayers([])
  }
}

export const ResetButton = styled(Button)`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 20px;
  width: 95%;
`
