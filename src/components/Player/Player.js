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
  background-color: var(--primary);
  color: var(--white);
  border-radius: 50px;
  width: 40px;
  height: 40px;
  vertical-align: center;
  letter-spacing: 0;
`
