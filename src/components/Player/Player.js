import styled from 'styled-components/macro'
import Button from '../Button'

export default function Player({ player, score, onScore, disabled }) {
  return (
    <section className="CountScore">
      <SinglePlayer>
        <SinglePlayerName>{player}</SinglePlayerName>
        <ScoreButton onClick={onScore} disabled={disabled}>
          {score}
        </ScoreButton>
      </SinglePlayer>
    </section>
  )
}

export const SinglePlayer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid var(--primary);
  padding: 6px 10px;
`
export const SinglePlayerName = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
`

export const ScoreButton = styled(Button)`
  font-size: 18px;
  color: var(--white);
  background-color: var(--primary);
  border-radius: 50px;
  width: 50px;
  height: 50px;
  vertical-align: middle;
  letter-spacing: 0;
  text-align: center;
`
