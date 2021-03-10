import { useState } from 'react'
import Grid from './components/Grid'
import AddPlayerForm from './components/AddPlayerForm/AddPlayerForm'
import Player from './components/Player'
import styled from 'styled-components'

export default function App() {
  const [players, setPlayers] = useState([])
  const [score, setScore] = useState(0)

  return (
    <Grid>
      <AddPlayerForm onAddPlayer={addPlayer} />
      <Player
        players={players}
        onScore={() => countScore(score)} // warum muss das hier in einer Arrowfunction
        score={score}
      />
    </Grid>
  )

  function addPlayer({ nameOfPlayer }) {
    setPlayers(nameOfPlayer, ...players)
  }

  function countScore(score) {
    setScore(score + 1)
  }
}

export const ListOfPlayers = styled.div`
  color: green;
`
