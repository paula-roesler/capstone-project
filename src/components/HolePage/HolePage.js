import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
// import { useState } from 'react'
import Button from '../Button'
import Player from '../Player'
import ShowWinner from '../ShowWinner'

export default function HoleOne({
  hole,
  img,
  distMen,
  distWomen,
  par,
  players,
  next,
  prev,
  visible,
  onScore,
  onReset,
  onSave,
  onSaveScore,
}) {
  return (
    <Wrapper>
      <HoleWrapper>
        <h1>{hole}</h1>
        <Par>{par}</Par>
        <HoleGraphic>{img}</HoleGraphic>
        <Distances>
          {distMen} + ' // ' + {distWomen}
        </Distances>
      </HoleWrapper>
      <PlayersWrapper>
        {players.map(({ name, score }, index) => (
          <Player
            key={index}
            player={name}
            score={score}
            onScore={() => onScore(index)}
            disabled={players.length <= 1}
          />
        ))}
        <Button as={Link} to={next} onClick={onSaveScore}>
          next
        </Button>
        <Button as={Link} to={prev} /*onClick={onReset}*/>
          prev
        </Button>
      </PlayersWrapper>

      <ShowWinnerWrapper>
        <Button visible={visible} as={Link} to="/winner">
          Show winner!
        </Button>

        {visible === 'winner' && (
          <>
            <ShowWinner
              hidden={visible}
              title={'Winner'}
              players={players}
              onReset={onReset}
            />
            <Button as={Link} to="/" onClick={onReset}>
              Play again
            </Button>
            <Button as={Link} to="/history" onClick={onSave}>
              Save game
            </Button>
          </>
        )}
      </ShowWinnerWrapper>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: grid;
  gap: 20px;
`
export const HoleWrapper = styled.div`
  background-color: lightpink;
  padding: 10px;
`

export const Par = styled.div`
  color: red;
  background-color: lightsalmon;
`
export const HoleGraphic = styled.div`
  color: green;
  background-color: lightskyblue;
`
export const Distances = styled.div`
  color: blue;
  background-color: lightgreen;
`
export const PlayersWrapper = styled.div`
  display: grid;
  gap: 20px;
  background-color: coral;
`
export const ShowWinnerWrapper = styled.div`
  background-color: royalblue;
`
