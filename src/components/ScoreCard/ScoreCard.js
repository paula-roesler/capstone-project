import styled from 'styled-components/macro'

export default function ScoreCard(players) {
  return players.map(player => {
    return (
      <WrapperScoreCard>
        <div>{player.name}</div>
        <div>{player.score}</div>
      </WrapperScoreCard>
    )
  })
}

export const WrapperScoreCard = styled.div`
  background-color: tomato;
`
