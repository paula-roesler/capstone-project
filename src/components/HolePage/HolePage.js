import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from '../Button'
import Player from '../Player'
import HoleGraphic from '../HoleGraphic'
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg'

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
  onPlus,
  onMinus,
  resetScore,
  onPrev,
}) {
  const arrowleft = <ArrowLeft />
  const arrowright = <ArrowRight />
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
            {arrowright}
          </NavButtonRight>
          <NavButtonLeft as={Link} to={prev} onClick={onPrev}>
            {arrowleft}
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
            onMinus={score === 0 ? disabled : () => onMinus(index, hole)}
            onPlus={() => onPlus(index, hole)}
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
export const HoleWrapper = styled.div``

export const Details = styled.div`
  font-size: 16px;
  color: var(--primary);
  text-align: left;
  border: 1px solid var(--primary);
  padding: 15px;
  text-align: center;
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
  left: -10px;
  top: 120px;
  color: var(--primary);
  background-color: var(--background);
`

export const NavButtonRight = styled(Button)`
  width: 40px;
  height: 40px;
  border-radius: none;
  position: absolute;
  right: 5px;
  top: 120px;
  color: var(--primary);
  background-color: var(--background);
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-items: space-between;
  position: relative;
`
HolePage.propTypes = {
  hole: PropTypes.number,
  src: PropTypes.string,
  alt: PropTypes.string,
  distMen: PropTypes.string,
  distWomen: PropTypes.string,
  par: PropTypes.string,
  players: PropTypes.array,
  next: PropTypes.func,
  disabled: PropTypes.bool,
  prev: PropTypes.func,
  onScore: PropTypes.func,
  resetScore: PropTypes.func,
  onPrev: PropTypes.func,
}
