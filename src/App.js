import { useState } from 'react'
import Grid from './components/Grid'
import AddPlayerForm from './components/AddPlayerForm/AddPlayerForm'
import Player from './components/Player'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

export default function App() {
  const [players, setPlayers] = useState([])
  // const [score, setScore] = useState(0)

  return (
    <Grid>
      <AddPlayerForm onAddPlayer={addPlayer} />
      {players.map(({ name, score }, index) => (
        <Player
          key={index}
          players={name}
          score={score}
          onScore={() => countScore(score)}
        />
      ))}
    </Grid>
  )

  function addPlayer({ nameOfPlayer }) {
    setPlayers([{ name: nameOfPlayer, score: 0 }, ...players])
    // setPlayers([nameOfPlayer.map(name => ({ name, score: 0 }))])
  }

  function countScore(score, index) {
    const currentPlayer = players[index]
    setScore([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score + 1 },
      ...players.slice(index + 1),
    ])
  }
}

export const ListOfPlayers = styled.div`
  color: green;
`
