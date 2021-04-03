import styled from 'styled-components/macro'

export default function Weather(weather) {
  console.log(weather)

  return (
    <WeatherForecast>
      <div>Hamburg Wetter: {weather['weather']['cnt']}</div>
      <div>Hamburg Wetter: {weather['weather']['cod']}</div>

      <div>Stadt Name: {weather['weather']['city']['name']}</div>
      <div>Country: {weather['weather']['city']['country']}</div>
      <div>temperature: {weather['weather']['list'][0]['main']['temp']}</div>
      <div>
        feels like: {weather['weather']['list'][0]['main']['feels_like']}
      </div>
      <div>icon: {weather['weather']['list'][0]['weather'][0]['icon']}</div>
      <img
        src={`https://openweathermap.org/img/wn/${weather['weather']['list'][0]['weather'][0]['icon']}.png`}
        alt=""
      />
    </WeatherForecast>
  )
}

export const WeatherForecast = styled.div`
  color: var(--primary);
`
