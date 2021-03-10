import styled from 'styled-components/macro'
import Button from '../Button'

export default function Player({ players, score, onScore }) {
  return (
    <section className="CountScore">
      <SinglePlayer>
        <SinglePlayerName>Player 1: {players}</SinglePlayerName>
        <ScoreButton onClick={onScore}>{score}</ScoreButton>
      </SinglePlayer>
    </section>
  )
}

export const SinglePlayer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid blue;
`
export const SinglePlayerName = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
`

export const ScoreButton = styled(Button)`
  background-color: #888;
  color: #fcfcfc;
  border-radius: 50px;
  width: 35px;
  height: 35px;
`
