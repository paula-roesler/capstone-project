// import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from '../Button'

export default function HistoryEntry({
  players,
  dateOfGame,
  // isNameALink = true,
}) {
  return (
    <Wrapper>
      <GameButton>{dateOfGame}</GameButton>
      {players.map((player, index) => (
        <PlayerButton key={index}>
          <span>{player.name}</span>
          <span>{player.score}</span>
        </PlayerButton>
      ))}
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: grid;
  gap: 20px;
`
export const GameButton = styled(Button)`
  display: flex;
  justify-content: space-between;
`

export const PlayerButton = styled(Button)`
  display: flex;
  justify-content: space-between;
`
