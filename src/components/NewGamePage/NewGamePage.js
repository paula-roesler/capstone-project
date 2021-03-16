import styled from 'styled-components/macro'
import AddPlayerForm from '../AddPlayerForm'
import Button from '../Button'
import { Link } from 'react-router-dom'

export default function NewGamePage({
  addPlayer,
  players,
  resetForm,
  startGame,
}) {
  return (
    <>
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

      {players.map(({ name }) => (
        <PlayerNames>{name}</PlayerNames>
      ))}
      <Button
        disabled={players.length <= 1}
        onClick={startGame}
        as={Link}
        to="/playing"
      >
        Start game
      </Button>
      <ButtonWrapper>
        <Button disabled={players.length <= 0} onClick={resetForm}>
          Reset
        </Button>
      </ButtonWrapper>
    </>
  )
}

export const PlayerNames = styled.div`
  display: grid;
  gap: 10px;
  padding: 10px;
  text-align: center;
  border: 2px solid royalblue;
  color: royalblue;
`

export const ButtonWrapper = styled.div`
  display: grid;
`
