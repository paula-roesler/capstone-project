import styled from 'styled-components/macro'

export default function Weather(weather) {
  console.log(weather)

  return (
    <WeatherForecast>
      <div>City: {weather['weather']['city']['name']}</div>
      <div>Temperature: {weather['weather']['list'][0]['main']['temp']}</div>
      <div>
        Feels like: {weather['weather']['list'][0]['main']['feels_like']}
      </div>
    </WeatherForecast>
  )
}

export const WeatherForecast = styled.div`
  color: var(--primary);
`
