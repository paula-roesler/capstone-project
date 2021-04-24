import { Link } from 'react-router-dom'
import { ReactComponent as Play } from '../../assets/play-button-o.svg'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from '../Button'

export default function LandingPage() {
  return (
    <>
      <h1>BIRDIE</h1>
      <h3>Score your game!</h3>
      <GoButton as={Link} to="new-game">
        <PlayButton />
      </GoButton>
    </>
  )
}

export const PlayButton = styled(Play)`
  width: 200px;
  height: 200px;
  filter: drop-shadow(0 0 5px var(--primary));
  transition: all 0.3s ease-in-out;
  &:hover {
    filter: drop-shadow(0 0 10px var(--secondary));
  }
`

export const GoButton = styled(Button)`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  color: var(--primary);
  background-color: transparent;
  &:hover {
    color: var(--secondary);
  }
`

LandingPage.propTypes = {
  players: PropTypes.func,
}
