import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Player from '../Player'
import Button from '../Button'

export default function GamePage({ players, onScore, endGame }) {
  return (
    <WrapperGamePage>
      <h1>Score!</h1>
      {players.map(({ name, score }, index) => (
        <Player
          key={index}
          player={name}
          score={score}
          onScore={() => onScore(index)}
          disabled={players.length <= 1}
        />
      ))}
      <Button onClick={endGame} as={Link} to="/">
        End game
      </Button>
    </WrapperGamePage>
  )
}

export const WrapperGamePage = styled.div`
  display: grid;
  gap: 10px;
  padding: 10px;
  text-align: center;
  color: var(--primary);
`
