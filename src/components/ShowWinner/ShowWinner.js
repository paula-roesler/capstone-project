import styled from 'styled-components/macro'

export default function ShowWinner({ visible, title, players, confetti }) {
  const winners = players.sort((a, b) => a.score - b.score)
  const newWinners = []

  return (
    <WrapperWinner hidden={visible}>
      <h1>{title}</h1>
      {determineWinner()}
      {newWinners.map((newWinner, index) => (
        <Winner key={index}>
          <WinnerName>{newWinner.name}</WinnerName>
          <WinnerScore>{newWinner.score}</WinnerScore>
        </Winner>
      ))}
    </WrapperWinner>
  )

  function determineWinner() {
    winners.forEach(winner => {
      if (winner.score === winners[0].score) {
        newWinners.push(winner)
      }
    })
  }
}

export const WrapperWinner = styled.div`
  display: grid;
  gap: 30px;
  align-content: end;
  padding: 10px;
  text-align: center;
  color: var(--secondary);
`

export const Winner = styled.div`
  border: var(--border-width) solid var(--secondary);
`

export const WinnerName = styled.h3`
  color: var(--secondary);
`

export const WinnerScore = styled.h3`
  color: var(--secondary);
`
