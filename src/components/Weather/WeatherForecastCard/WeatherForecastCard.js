import styled from 'styled-components/macro'

export default function WeatherForecastCard(weather, date) {
  const date1 = new Date(weather['weather']['weather']['list'][0]['dt'] * 1000)
  const day1 = date1.toDateString()
  //   const dayx = date1.toLocaleDateString()
  const degree = weather['weather']['weather']['list'][0]['main']['temp']
  const removedDecimal = Math.trunc(degree)

  console.log(weather)

  return (
    <ForecastWrapper>
      <h2>Hamburg weather</h2>
      <ForecastDay>
        <h4>{day1}</h4>
        <ForecastIcon
          src={`https://openweathermap.org/img/wn/${weather['weather']['weather']['list'][0]['weather'][0]['icon']}.png`}
          alt=""
        />

        <ForecastDegree>{removedDecimal} °C</ForecastDegree>
        <ForecastDescription>
          {
            weather['weather']['weather']['list'][0]['weather'][0][
              'description'
            ]
          }
          <br></br>
          Wind: {weather['weather']['weather']['list'][0]['wind']['speed']} km/h
          <br></br>
          Humidity:{' '}
          {weather['weather']['weather']['list'][0]['main']['humidity']}%
        </ForecastDescription>
      </ForecastDay>
    </ForecastWrapper>
  )
}

export const ForecastDegree = styled.p`
  font-size: 150%;
`
export const ForecastDescription = styled.p``

export const ForecastIcon = styled.img`
  position: absolute;
  top: 12px;
  right: 30px;
`

export const ForecastDay = styled.div`
  padding: 1px 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.2);
  position: relative;
`

export const ForecastWrapper = styled.div``
