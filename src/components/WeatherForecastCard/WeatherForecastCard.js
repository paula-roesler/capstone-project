import styled from 'styled-components/macro'

export default function WeatherForecastCard(weather) {
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
      <Headline>Hamburg</Headline>
      <ForecastDay>
        <ForecastDate>{day1}</ForecastDate>
        <ForecastHead>
          <ForecastDegree>{degDay1} °C</ForecastDegree>

          <ForecastIcon>
            <img
              src={`src=./../images/weathericons/${weather['weather']['weather']['list'][0]['weather'][0]['icon']}.svg`}
              alt=""
            />
          </ForecastIcon>
        </ForecastHead>
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
      <ForecastDay>
        <ForecastDate>{day2}</ForecastDate>
        <ForecastHead>
          <ForecastDegree>{degDay2} °C</ForecastDegree>
          <ForecastIcon>
            <img
              src={`src=./../images/weathericons/${weather['weather']['weather']['list'][9]['weather'][0]['icon']}.svg`}
              alt=""
            />
          </ForecastIcon>
        </ForecastHead>

        <ForecastDescription>
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

export const Headline = styled.h2`
  color: var(--primary);
  margin-top: 35px;
  margin-bottom: 0;
`

export const ForecastDate = styled.h4`
  color: var(--primary);
  margin-bottom: 0;
`

export const ForecastHead = styled.div`
  display: flex;
  justify-items: space-between;
`

export const ForecastIcon = styled.div`
  width: 60px;
  height: 20px;
  padding: 7px;
`
export const ForecastDegree = styled.p`
  font-size: 150%;
  margin: 0;
  padding-top: 10px;
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
  background-color: var(--background);
`

export const ForecastWrapper = styled.div`
  display: grid;
  gap: 20px;
  color: var(--primary);
`
