import styled from 'styled-components/macro'

export default function Weather(weather) {
  console.log(weather)

  return (
    <WeatherForecast>
      <div>Latitude: {weather['weather']['lat']}</div>
      <div>Longitude: {weather['weather']['lon']}</div>
      <div>Latitude: {weather['weather']['lat']}</div>
    </WeatherForecast>
  )
}

export const WeatherForecast = styled.div`
  color: var(--primary);
`
