import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from '../Button'

export default function ShowWinner({
  visible,
  title,
  name,
  score,
  resetPlayers,
}) {
  return (
    <>
      <WrapperWinner hidden={visible}>
        <h1>{title}</h1>
        <WinnerName>{name}</WinnerName>
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
  height: 85vh;
  background-color: var(--secondary);
`

export const WinnerName = styled.h2`
  color: darkorange;
`
export const WinnerScore = styled.h2`
  color: tomato;
`
