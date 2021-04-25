import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from '../Button'

export default function ShowWinner({ title, players, onReset, onSave }) {
  const newPlayerArray = players.map(player => {
    const overAllScore = player.holes.reduce((acc, hole) => acc + hole.score, 0)
    return { ...player, overAllScore }
  })

  const winners = newPlayerArray.sort((a, b) => a.overAllScore - b.overAllScore)
  const newWinners = winners.filter(
    winner => winner.overAllScore === winners[0].overAllScore
  )

  return (
    <WrapperWinner>
      <h1>{title}</h1>
      {newWinners.map((newWinner, index) => (
        <Winner key={index}>
          <WinnerName>{newWinner.name}</WinnerName>
          <WinnerScore>{newWinner.overAllScore}</WinnerScore>
        </Winner>
      ))}

      <Button as={Link} to="/" onClick={onReset}>
        Play again
      </Button>
      <Button as={Link} to="/history" onClick={onSave}>
        Save game
      </Button>
      <Hint>
        A perfect round of golf usually takes 18 holes. For more comfortable
        testing purposes only three holes have been created currently.
      </Hint>
    </WrapperWinner>
  )
}

export const WrapperWinner = styled.div`
  display: grid;
  gap: 30px;
  align-content: end;
  padding: 10px;
  text-align: center;
  color: var(--secondary);
`

export const Winner = styled.div`
  border: var(--border-width) solid var(--secondary);
`

export const WinnerName = styled.p`
  color: var(--secondary);
`

export const WinnerScore = styled.p`
  color: var(--secondary);
`

export const Hint = styled.div`
  text-align: center;
  font-style: italic;
  color: var(--primary);
  width: 100%;
  padding: 20px;
  border: 1px solid var(--secondary);
  border-radius: 12px;
`

ShowWinner.propTypes = {
  title: PropTypes.string,
  players: PropTypes.array,
  onReset: PropTypes.func,
  onSave: PropTypes.func,
}
