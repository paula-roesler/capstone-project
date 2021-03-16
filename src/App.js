// import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { useState } from 'react'
import Grid from './components/Grid'
import AddPlayerForm from './components/AddPlayerForm/AddPlayerForm'
import GamePage from './components/GamePage'
import Button from './components/Button'

export default function App() {
  const [players, setPlayers] = useState([])

  return (
    <Grid>
      <AddPlayerForm
        role="form"
        name="addPlayerForm"
        onAddPlayer={addPlayer}
        disabled={players.length >= 4}
        placeholderText={
          players.length >= 4
            ? 'Your flight has reached the max. of 4 players'
            : 'Enter player name (e.g. Joe)'
        }
      />

      {/* {players.map(({ name, score }, index) => (
        <Player
          key={index}
          player={name}
          score={score}
          onScore={() => countScore(index)}
          disabled={players.length <= 1}
        />
      ))} */}

      <Button disabled={players.length <= 1} onClick={startGame}>
        Start game
      </Button>

      <GamePage players={players} onScore={countScore} />

      <ButtonWrapper>
        <Button disabled={players.length <= 0} onClick={resetForm}>
          Reset
        </Button>
      </ButtonWrapper>
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

function startGame() {}

export const ButtonWrapper = styled.div`
  display: grid;
`
