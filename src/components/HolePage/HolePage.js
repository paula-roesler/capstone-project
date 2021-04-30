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
      <HoleInfo>
        <Hole>{hole}</Hole>
        <Details>
          <li>{par}</li>
          <li>
            <Yellow></Yellow>
            {distMen} m
          </li>
          <li>
            <Red></Red>
            {distWomen} m
          </li>
        </Details>
      </HoleInfo>
      <HolePicture>
        <HoleGraphic src={src} alt={alt} />
      </HolePicture>
      <NavButtonLeft as={Link} to={prev} onClick={onPrev}>
        {arrowleft}
      </NavButtonLeft>
      <NavButtonRight
        as={Link}
        to={next}
        onClick={resetScore}
        disabled={disabled}
      >
        {arrowright}
      </NavButtonRight>
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
  position: relative;
`
export const HoleInfo = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  text-align: left;
  color: var(--primary);
  font-size: 16px;
`
export const Hole = styled.h1`
  font-size: 30px;
  margin: 0;
`
export const Details = styled.ul`
  color: var(--primary);
  list-style: none;
  padding-left: 0;
  vertical-align: middle;
  margin-top: 0;
`
export const Par = styled.div`
  color: var(--primary);
`
export const Yellow = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50px;
  background-color: var(--yellow);
  margin-right: 10px;
  display: inline-block;
`
export const Red = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50px;
  background-color: var(--red);
  margin-right: 10px;
  display: inline-block;
`
export const NavButtonLeft = styled(Button)`
  position: absolute;
  top: 170px;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: none;
  color: var(--primary);
  background-color: var(--background);
  margin: 0;
`
export const NavButtonRight = styled(Button)`
  position: absolute;
  top: 170px;
  right: 15px;
  width: 40px;
  height: 40px;
  border-radius: none;
  color: var(--primary);
  background-color: var(--background);
  margin: 0;
`
export const HolePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`

export const PlayersWrapper = styled.div`
  display: grid;
  gap: 20px;
  margin-bottom: 0;
`

HolePage.propTypes = {
  hole: PropTypes.number,
  src: PropTypes.string,
  alt: PropTypes.string,
  distMen: PropTypes.string,
  distWomen: PropTypes.string,
  par: PropTypes.string,
  players: PropTypes.array,
  next: PropTypes.string,
  prev: PropTypes.string,
  disabled: PropTypes.bool,
  onScore: PropTypes.func,
  resetScore: PropTypes.func,
  onPrev: PropTypes.func,
}
