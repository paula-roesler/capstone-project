import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from '../Button'
import Player from '../Player'
import HoleGraphic from '../HoleGraphic'

export default function HolePage({
  hole,
  src,
  alt,
  distMen,
  distWomen,
  par,
  players,
  next,
  prev,
  onScore,
  onSaveScore,
}) {
  return (
    <Wrapper>
      <HoleWrapper>
        <h2>{hole}</h2>
        <HoleGraphic src={src} alt={alt} />
        <Par>{par}</Par>
        <Distances>
          {distMen} + ' // ' + {distWomen}
        </Distances>
      </HoleWrapper>
      <PlayersWrapper>
        {players.map(({ name, score, hole }, index) => (
          <Player
            key={index}
            player={name}
            score={score}
            onScore={() => onScore(index)}
            disabled={players.length <= 1}
            playerHole={hole}
          />
        ))}
        <Button as={Link} to={next} onClick={onSaveScore}>
          next
        </Button>
        <Button as={Link} to={prev}>
          prev
        </Button>
      </PlayersWrapper>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  text-align: center;
`
export const HoleWrapper = styled.div`
  padding: 10px;
`

export const Par = styled.div`
  color: var(--primary);
`

export const Distances = styled.div`
  color: var(--primary);
`
export const PlayersWrapper = styled.div`
  display: grid;
  gap: 20px;
`
