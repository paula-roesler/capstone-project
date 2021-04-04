import styled from 'styled-components/macro'

export default function WeatherForecastCard(weather, date) {
  const date1 = new Date(weather['weather']['weather']['list'][0]['dt'] * 1000)
  const day1 = date1.toDateString()
  const date2 = new Date(weather['weather']['weather']['list'][9]['dt'] * 1000)
  const day2 = date2.toDateString()
  //   const dayx = date1.toLocaleDateString()
  const degree1 = weather['weather']['weather']['list'][0]['main']['temp']
  const degDay1 = Math.trunc(degree1)

  const degree2 = weather['weather']['weather']['list'][9]['main']['temp']
  const degDay2 = Math.trunc(degree2)

  console.log(weather)

  return (
    <ForecastWrapper>
      <h2>Hamburg weather</h2>
      <ForecastDay>
        <ForecastDate>{day1}</ForecastDate>
        <ForecastHead>
          <ForecastDegree>{degDay1} °C</ForecastDegree>
          <ForecastIcon>
            <img
              src={`https://openweathermap.org/img/wn/${weather['weather']['weather']['list'][0]['weather'][0]['icon']}.png`}
              alt=""
            />
          </ForecastIcon>
        </ForecastHead>
        <ForecastDescription>
          Main:{' '}
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
      <ForecastDay>
        <ForecastDate>{day2}</ForecastDate>
        <ForecastHead>
          <ForecastDegree>{degDay2} °C</ForecastDegree>
          <ForecastIcon>
            <img
              src={`https://openweathermap.org/img/wn/${weather['weather']['weather']['list'][9]['weather'][0]['icon']}.png`}
              alt=""
            />
          </ForecastIcon>
        </ForecastHead>
        <ForecastDescription>
          Main:{' '}
          {
            weather['weather']['weather']['list'][9]['weather'][0][
              'description'
            ]
          }
          <br></br>
          Wind: {weather['weather']['weather']['list'][9]['wind']['speed']} km/h
          <br></br>
          Humidity:{' '}
          {weather['weather']['weather']['list'][9]['main']['humidity']}%
        </ForecastDescription>
      </ForecastDay>
    </ForecastWrapper>
  )
}

export const ForecastDate = styled.h4`
  color: var(--background);
`

export const ForecastHead = styled.div`
  display: flex;
  justify-items: space-between;
`

export const ForecastIcon = styled.div`
  width: 60px;
  height: 60px;
`
export const ForecastDegree = styled.p`
  font-size: 150%;
  margin: 0;
  width: 60px;
  height: 60px;
`
export const ForecastDescription = styled.div`
  margin: 0;
`

export const ForecastDay = styled.div`
  padding: 1px 20px 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.2);
  background-color: #c6d7de;
`

export const ForecastWrapper = styled.div`
  display: grid;
  gap: 20px;
  color: var(--background);
`
