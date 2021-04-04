import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ReactComponent as Sun } from '../../assets/sun.svg'
import AddPlayerForm from '../AddPlayerForm'
import Button from '../Button'

export default function NewGamePage({
  addPlayer,
  players,
  resetForm,
  resetHoleOne,
  name,
}) {
  const sun = <Sun />
  return (
    <>
      <NavigationButtonWeather as={Link} to="/weather">
        {sun}
      </NavigationButtonWeather>

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
          onClick={resetHoleOne}
          as={NavLink}
          to="/one"
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
export const NavigationButtonWeather = styled(Button)`
  font-family: inherit;
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  color: var(--secondary);
  border: 1px solid var(--secondary);
  background-color: transparent;
  border-radius: 0;
  padding: 10px 10px;
  width: 50px;
  height: 47px;
  position: absolute;
  top: -1px;
  right: 20px;

  &:hover {
    border: 1px solid var(--white);
    color: var(--white);
  }

  &:disabled {
    background-color: var(--disabled);
  }
`
