import PropTypes from 'prop-types'
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
  border: var(--border-width) solid var(--secondary);
  padding: 6px 10px 6px 20px;
`
export const SinglePlayerName = styled.div`
  color: var(--secondary);
  height: 35px;
  display: flex;
  align-items: center;
`

export const ScoreButton = styled(Button)`
  font-size: 18px;
  letter-spacing: 0;
  text-align: center;
  color: var(--background);
  background-color: var(--secondary);
  border-radius: 50px;
  width: 50px;
  height: 50px;
  vertical-align: middle;
  margin: 0 !important;
`
Player.propTypes = {
  player: PropTypes.string,
  score: PropTypes.number,
  onScore: PropTypes.func,
  disabled: PropTypes.bool,
}
