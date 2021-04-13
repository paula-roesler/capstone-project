import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { ReactComponent as Home } from '../../assets/home.svg'
import Button from '../Button'
import WeatherForecastCard from '../WeatherForecastCard'

export default function Weather(weather, error) {
  const home = <Home />
  return (
    <>
      <NavigationButtonHome as={Link} to="/">
        {home}
      </NavigationButtonHome>
      <Headline>Hamburg</Headline>
      <WeatherForecast>
        <WeatherForecastCard weather={weather} day="0" />
        <WeatherForecastCard weather={weather} day="8" />
        <WeatherForecastCard weather={weather} day="16" />
        <WeatherForecastCard weather={weather} day="24" />
        <WeatherForecastCard weather={weather} day="32" />
      </WeatherForecast>
    </>
  )
}
export const Headline = styled.h2`
  color: var(--primary);
  margin-top: 35px;
  margin-bottom: 10px;
`

export const WeatherForecast = styled.div`
  color: var(--primary);
  display: grid;
  gap: 15px;
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
