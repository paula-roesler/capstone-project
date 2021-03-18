import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from '../Button'

export default function ShowWinner({
  visible,
  title,
  name,
  score,
  resetPlayers,
  players,
}) {
  const winner = players.sort((a, b) => a.score - b.score)
  return (
    <>
      <WrapperWinner hidden={visible}>
        <h1>{title}</h1>
        <div>{name}</div>
        <div>{score}</div>
      </WrapperWinner>
      <Button as={Link} to="/" onClick={resetPlayers}>
        Play again
      </Button>
    </>
  )
}

export const WrapperWinner = styled.div`
  display: grid;
  gap: 10px;
  padding: 10px;
  text-align: center;
  color: var(--primary);
  height: 100vh;
  background-color: var(--secondary);
`
