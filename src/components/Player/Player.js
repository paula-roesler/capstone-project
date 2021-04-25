import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from '../Button'

export default function Player({ player, score, onMinus, onPlus, disabled }) {
  return (
    <section className="CountScore">
      <SinglePlayer>
        <SinglePlayerName>{player}</SinglePlayerName>
        <ScoreButtonsWrapper>
          <MinusButton onClick={onMinus} disabled={disabled}>
            –
          </MinusButton>
          <Score>{score}</Score>
          <PlusButton onClick={onPlus} disabled={disabled}>
            +
          </PlusButton>
        </ScoreButtonsWrapper>
      </SinglePlayer>
    </section>
  )
}

export const SinglePlayer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: var(--border-width) solid var(--secondary);
  padding: 0 0 0 20px;
`
export const SinglePlayerName = styled.div`
  color: var(--secondary);
  height: 35px;
  display: flex;
  align-items: center;
`
export const ScoreButtonsWrapper = styled.div`
  display: flex;
`
export const Score = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  text-align: center;
  color: var(--secondary);
  width: 50px;
  height: 50px;
  vertical-align: middle;
`
export const PlusButton = styled(Button)`
  font-size: 25px;
  text-align: center;
  color: var(--background);
  background-color: var(--secondary);
  border-radius: 0;
  width: 50px;
  height: 50px;
  margin: 0 !important;
  &:active,
  &:hover {
    opacity: 0.7;
  }
`

export const MinusButton = styled(Button)`
  font-size: 25px;
  text-align: center;
  color: var(--background);
  background-color: var(--secondary);
  border-radius: 0;
  width: 50px;
  height: 50px;
  vertical-align: middle;
  margin: 0 !important;
  &:active,
  &:hover {
    opacity: 0.7;
  }
`

Player.propTypes = {
  player: PropTypes.string,
  score: PropTypes.number,
  onScore: PropTypes.func,
  onPlus: PropTypes.func,
  onMinus: PropTypes.func,
  disabled: PropTypes.bool,
}
