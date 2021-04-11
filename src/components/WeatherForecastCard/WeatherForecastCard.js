import styled from 'styled-components/macro'

export default function WeatherForecastCard(weather) {
  const currentDay = parseInt(weather.day)
  // const dayx = date1.toLocaleDateString()

  return (
    <ForecastWrapper>
      <ForecastDay>
        <ForecastDate>{new Date(weather['weather']['weather']['list'][currentDay]['dt'] * 1000).toDateString()}</ForecastDate>
        <ForecastHead>
          <ForecastDegree>{Math.trunc(weather['weather']['weather']['list'][currentDay]['main']['temp'])} °C</ForecastDegree>
          <ForecastIcon>
            <img
              src={`src=./../images/weathericons/${weather['weather']['weather']['list'][currentDay]['weather'][0]['icon']}.svg`}
              alt=""
            />
          </ForecastIcon>
        </ForecastHead>
        <ForecastDescription>
          {
            weather['weather']['weather']['list'][currentDay]['weather'][0][
              'description'
            ]
          }
          <br></br>
          Wind: {weather['weather']['weather']['list'][currentDay]['wind']['speed']} km/h
          <br></br>
          Humidity:{' '}
          {weather['weather']['weather']['list'][currentDay]['main']['humidity']}%
        </ForecastDescription>
      </ForecastDay>
    </ForecastWrapper>
  )
}



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
  width: 80px;
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
