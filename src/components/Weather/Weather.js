import styled from 'styled-components/macro'
import WeatherForecastCard from '../WeatherForecastCard'

export default function Weather(weather, date) {
  console.log(weather)

  return (
    <WeatherForecast>
      <WeatherForecastCard weather={weather} />
    </WeatherForecast>
  )
}

export const WeatherForecast = styled.div`
  color: var(--primary);
`
