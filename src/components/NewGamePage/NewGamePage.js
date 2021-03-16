import styled from 'styled-components/macro'
import AddPlayerForm from '../AddPlayerForm'
import Button from '../Button'
import { NavLink } from 'react-router-dom'

export default function NewGamePage({ addPlayer, players, resetForm }) {
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

      <ButtonWrapper>
        <Button
          bgColor="var(--secondary)"
          txtColor="var(--primary)"
          hidden={players.length <= 1}
          as={NavLink}
          to="/playing"
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
  display: grid;
  gap: 10px;
  padding: 10px;
  text-align: center;
  border: 2px solid var(--primary);
  color: royalblue;
`

export const ButtonWrapper = styled.div`
  display: grid;
  gap: 10px;
`
