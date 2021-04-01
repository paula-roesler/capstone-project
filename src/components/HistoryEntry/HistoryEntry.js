import { useState } from 'react'
import styled from 'styled-components/macro'
import Button from '../Button'
import { ReactComponent as Arrow } from '../../assets/arrow-right-o.svg'
import { ReactComponent as ArrowDown } from '../../assets/arrow-down-o.svg'

export default function HistoryEntry({ players, dateOfGame }) {
  const [isGameDetailsVisible, setIsGameDetailsVisible] = useState(false)

  return (
    <Wrapper>
      <DateOfGameButton
        onClick={event => {
          event.stopPropagation()
          setIsGameDetailsVisible(!isGameDetailsVisible)
        }}
      >
        <ArrowSpan>
          {!isGameDetailsVisible ? <Arrow /> : <ArrowDown />}

          <DateSpan>{dateOfGame}</DateSpan>
        </ArrowSpan>
      </DateOfGameButton>
      {!isGameDetailsVisible ? (
        ''
      ) : (
        <div>
          {players.map((player, playerIndex) => (
            <PlayerWrapper key={playerIndex}>
              <PlayerButton hidden={!isGameDetailsVisible}>
                <span>{player.name}</span>
                <span>{calculateScore(player.holes)}</span>
              </PlayerButton>
              <ScoreCardDl>
                {player.holes.map((hole, index) => (
                  <div key={index}>
                    <HoleNameDt>H: {hole.name}</HoleNameDt>
                    <HoleScoreDd>S: {hole.score}</HoleScoreDd>
                  </div>
                ))}
              </ScoreCardDl>
            </PlayerWrapper>
          ))}
        </div>
      )}
      {console.log(players)}
    </Wrapper>
  )

  function calculateScore(holes) {
    return holes.reduce((acc, hole) => acc + hole.score, 0)
  }
}

export const HoleScoreDd = styled.dd`
  background-color: coral;
`

export const HoleNameDt = styled.dt`
  background-color: skyblue;
`

export const ScoreCardDl = styled.dl`
  background-color: whitesmoke;
`

export const PlayerWrapper = styled.div`
  padding-bottom: 20px;
`

export const Wrapper = styled.div`
  display: grid;
  gap: 20px;
`
export const DateOfGameButton = styled(Button)`
  display: flex;
  align-items: center;
  font-size: 130%;
  color: var(--primary);
  background-color: var(--transparent);
  text-align: left;
  width: 100%;
`

export const PlayerButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  color: var(--secondary);
  border: 1px solid var(--secondary);
  border-radius: 0;
  background-color: var(--transparent);
  width: 100%;
`
export const ArrowSpan = styled.div`
  display: flex;
  align-items: center;
  color: var(--primary);
  padding-right: 10px;
`
export const DateSpan = styled.span`
  color: var(--primary);
  padding-left: 10px;
`
