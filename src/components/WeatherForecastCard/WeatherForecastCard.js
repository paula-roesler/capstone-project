import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

export default function WeatherForecastCard(weather) {
  const currentDay = parseInt(weather.day)
  console.log(currentDay)
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return (
    <ForecastWrapper>
      <ForecastDay>
        <ForecastDescription>
          <ForecastDate>
            {new Date(
              weather['weather']['weather']['list'][currentDay]['dt'] * 1000
            ).toLocaleDateString('en-EN', options)}
          </ForecastDate>
          {
            weather['weather']['weather']['list'][currentDay]['weather'][0][
              'description'
            ]
          }
          <br></br>
          Wind:{' '}
          {
            weather['weather']['weather']['list'][currentDay]['wind']['speed']
          }{' '}
          km/h
          <br></br>
          Humidity:{' '}
          {
            weather['weather']['weather']['list'][currentDay]['main'][
              'humidity'
            ]
          }
          %
        </ForecastDescription>
        <DegreeAndSymbol>
          <ForecastDegree>
            {Math.trunc(
              weather['weather']['weather']['list'][currentDay]['main']['temp']
            )}{' '}
            °C
          </ForecastDegree>
          <ForecastIcon>
            <img
              src={`src=./../images/weathericons/${weather['weather']['weather']['list'][currentDay]['weather'][0]['icon']}.svg`}
              alt=""
            />
          </ForecastIcon>
        </DegreeAndSymbol>
      </ForecastDay>
    </ForecastWrapper>
  )
}

export const DegreeAndSymbol = styled.div`
  text-align: center;
`
export const ForecastIcon = styled.div`
  width: 70px;
  height: 20px;
  padding: 7px;
  margin: 0 auto;
`
export const ForecastDegree = styled.div`
  font-size: 150%;
  margin: 0;
  padding-top: 15px;
  width: 80px;
  height: 60px;
`
export const ForecastDate = styled.h4`
  color: var(--primary);
  margin-bottom: 0;
`
export const ForecastDescription = styled.div`
  margin: 0;
`
export const ForecastDay = styled.div`
  display: flex;
  justify-content: space-between;
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

WeatherForecastCard.propTypes = {
  weather: PropTypes.object,
}
