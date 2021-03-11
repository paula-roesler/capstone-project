import { useState } from 'react'
import Grid from './components/Grid'
import AddPlayerForm from './components/AddPlayerForm/AddPlayerForm'
import Player from './components/Player'
// import styled from 'styled-components'
// import PropTypes from 'prop-types'

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
}
