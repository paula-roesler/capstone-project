import styled from 'styled-components/macro'
import Button from '../Button'

export default function Player({ players, score, onScore }) {
  return (
    <section className="CountScore">
      Add Score:
      <SinglePlayer>
        <span>Player 1: {players}</span>
        <ScoreButton onClick={onScore}>{score}</ScoreButton>
      </SinglePlayer>
    </section>
  )
}

export const SinglePlayer = styled.div`
  display: flex;
  gap: 20px;
`

export const ScoreButton = styled(Button)`
  background-color: #888;
  color: #fcfcfc;
  border-radius: 50px;
  width: 35px;
  height: 35px;
`
