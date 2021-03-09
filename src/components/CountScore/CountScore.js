import styled from 'styled-components/macro'
import Button from '../Button'

export default function CountScore() {
  return (
    <section className="CountScore">
      Add Score:
      <div className="CountScore__Player">Player 1</div>
      <ScoreButton>0</ScoreButton>
    </section>
  )
}

export const ScoreButton = styled(Button)`
  border-radius: 50px;
  background-color: blue;
  width: 50px;
  height: 50px;
`
