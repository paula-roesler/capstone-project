import { Link } from 'react-router-dom'
import { ReactComponent as Play } from '../../assets/play-button-o.svg'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from '../Button'

export default function LandingPage({ title, subtitle }) {
  return (
    <>
      <Title>
        {title}
        <Subtitle>{subtitle}</Subtitle>
      </Title>
      <ButtonWrapper>
        <GoButton as={Link} to="new-game">
          <PlayButton />
        </GoButton>
      </ButtonWrapper>
    </>
  )
}

export const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  margin-bottom: 0;
`

export const Subtitle = styled.span`
  display: block;
  font-size: 19px;
  margin-top: 0;
  text-align: center;
  font-style: italic;
  font-weight: 300;
  color: var(--secondary);
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  height: 70vh;
`

export const PlayButton = styled(Play)`
  width: 170px;
  height: 170px;
  position: absolute;
  top: -20px;
  left: -20px;

  transition: all 0.3s ease-in-out;
`

export const GoButton = styled(Button)`
  position: relative;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: var(--primary);
  cursor: pointer;
  box-shadow: 0 0 0 var(--primary04);
  animation: GoButton 2s infinite;
  color: var(--background);
  &:hover {
    color: var(--background);
    background-color: var(--secondary);
    animation: none;
  }
  &:active {
    color: var(--background);
    background-color: var(--secondary);
  }

  @-webkit-keyframes GoButton {
    0% {
      -webkit-box-shadow: 0 0 0 0 var(--secondary04);
    }
    70% {
      -webkit-box-shadow: 0 0 0 20px var(--secondary00);
    }
    100% {
      -webkit-box-shadow: 0 0 0 0 var(--secondary00);
    }
  }
  @keyframes GoButton {
    0% {
      -moz-box-shadow: 0 0 0 0 var(--secondary04);
      box-shadow: 0 0 0 0 var(--secondary04);
    }
    70% {
      -moz-box-shadow: 0 0 0 20px var(--secondary00);
      box-shadow: 0 0 0 20px var(--secondary00);
    }
    100% {
      -moz-box-shadow: 0 0 0 0 var(--secondary00);
      box-shadow: 0 0 0 0 var(--secondary00);
    }
  }
`

LandingPage.propTypes = {
  players: PropTypes.func,
}
