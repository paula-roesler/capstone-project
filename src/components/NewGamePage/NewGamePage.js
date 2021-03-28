import styled from 'styled-components/macro'
import AddPlayerForm from '../AddPlayerForm'
import Button from '../Button'
import { NavLink } from 'react-router-dom'

export default function NewGamePage({ addPlayer, players, resetForm, name }) {
  return (
    <>
      <AddPlayerForm
        key={name}
        role="form"
        onAddPlayer={addPlayer}
        disabled={players.length >= 4}
        placeholderText={
          players.length >= 4
            ? 'Your flight has reached the max. of 4 players'
            : 'Enter player name (e.g. Joe)'
        }
      />

      {players.map(({ name }, index) => (
        <PlayerNames key={index}>{name}</PlayerNames>
      ))}

      <ButtonWrapper>
        <Button
          bgcolor="var(--secondary)"
          hidden={players.length <= 1}
          as={NavLink}
          to="/one" // hier müsste der Name der Bahn stehen
        >
          Start game
        </Button>
        <Button hidden={players.length <= 0} onClick={resetForm}>
          Reset
        </Button>
      </ButtonWrapper>
    </>
  )
}

export const PlayerNames = styled.div`
  color: var(--secondary);
  padding: 10px;
  text-align: center;
  border: var(--border-width) solid var(--secondary);
`

export const ButtonWrapper = styled.div`
  display: grid;
  gap: 20px;
  padding-top: 20px;
`
