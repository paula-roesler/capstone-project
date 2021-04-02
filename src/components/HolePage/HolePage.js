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
  disabled,
  prev,
  onScore,
  resetScore,
  onPrev,
}) {
  return (
    <Wrapper>
      <HoleWrapper>
        <h2>Hole {hole}</h2>
        <ButtonWrapper>
          <NavButtonRight
            as={Link}
            to={next}
            onClick={resetScore}
            disabled={disabled}
          >
            &gt;
          </NavButtonRight>
          <NavButtonLeft as={Link} to={prev} onClick={onPrev}>
            &lt;
          </NavButtonLeft>
        </ButtonWrapper>
        <HoleGraphic src={src} alt={alt} />
        <Details>
          <Par></Par>
          <Distances>
            {par} / Men: {distMen} m / Women: {distWomen} m
          </Distances>
        </Details>
      </HoleWrapper>
      <PlayersWrapper>
        {players.map(({ name, score }, index) => (
          <Player
            key={index}
            player={name}
            score={score}
            onScore={() => onScore(index, hole)}
            disabled={players.length <= 1}
          />
        ))}
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

export const Details = styled.div`
  font-size: 16px;
  color: var(--primary);
  text-align: left;
  border: 1px solid var(--primary);
  padding: 15px;
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
  position: relative;
`

export const NavButtonLeft = styled(Button)`
  width: 40px;
  height: 40px;
  border-radius: none;
  position: absolute;
  left: 0;
  top: 120px;
`

export const NavButtonRight = styled(Button)`
  width: 40px;
  height: 40px;
  border-radius: none;
  position: absolute;
  right: 0;
  top: 120px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-items: space-between;
  position: relative;
`
