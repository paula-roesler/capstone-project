import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { ReactComponent as Home } from '../../assets/home.svg'
import Button from '../Button'
import WeatherForecastCard from '../WeatherForecastCard'

export default function Weather(weather) {
  const home = <Home />

  return (
    <>
      <NavigationButtonHome as={Link} to="/">
        {home}
      </NavigationButtonHome>
      <WeatherForecast>
        <WeatherForecastCard weather={weather} />
      </WeatherForecast>
    </>
  )
}

export const WeatherForecast = styled.div`
  color: var(--primary);
`

export const NavigationButtonHome = styled(Button)`
  font-family: inherit;
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  color: var(--secondary);
  border: 1px solid var(--secondary);
  background-color: transparent;
  border-radius: 0;
  padding: 10px 10px;
  width: 50px;
  height: 47px;
  position: absolute;
  top: -1px;
  right: 20px;

  &:hover {
    border: 1px solid var(--white);
    color: var(--white);
  }

  &:disabled {
    background-color: var(--disabled);
  }
`
