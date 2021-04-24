import { Route, Switch, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { loadFromLocal, saveToLocal } from './lib/localStorage'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components/macro'
import Grid from './components/Grid'
import NewGamePage from './components/NewGamePage'
import HistoryPage from './components/HistoryPage'
import Holes from './components/Holes'
import ShowWinner from './components/ShowWinner'
import WeatherForecast from './components/WeatherForecast'
import LandingPage from './components/LandingPage'

export default function App() {
  const [players, setPlayers] = useState([])
  const [currentHole, setCurrentHole] = useState(0)
  const [history, setHistory] = useState(loadFromLocal('history') ?? [])
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState(loadFromLocal('weather') ?? [])

  const apiKey = process.env.REACT_APP_API_KEY
  let day = new Date().getDate()

  useEffect(() => {
    getAllWeatherData()
  }, [])

  useEffect(() => {
    saveToLocal('weather', weather)
  }, [weather])

  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }
  let dateOfGame = new Date().toLocaleDateString('en-EN', options)

  const { push } = useHistory()

  useEffect(() => {
    saveToLocal('history', history)
  }, [history])

  return (
    <Grid>
      <Switch>
        <Route exact path="/">
          <LandingPage title={'BIRDIE'} subtitle={'Score your game!'} />
        </Route>
        <Route path="/new-game">
          <NewGamePage
            key={players}
            players={players}
            addPlayer={addPlayer}
            resetForm={resetForm}
            resetHoleOne={resetHole}
          />
        </Route>
        <Route path="/winner">
          <ShowWinner
            title={'Winner'}
            players={players}
            onReset={onReset}
            onSave={saveGame}
          />
        </Route>
        <Route path="/history">
          <HistoryPage history={history} />
        </Route>
        <Route path="/weather">
          <div>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <WeatherForecast weather={weather} day={day} />
          </div>
        </Route>
        <Holes
          players={players}
          countScore={countScore}
          onNext={resetScore}
          onPrev={decrHole}
          onReset={onReset}
          onSave={saveGame}
          hole={currentHole + 1}
        />
      </Switch>
    </Grid>
  )

  function addPlayer({ nameOfPlayer }) {
    setPlayers([{ name: nameOfPlayer, score: 0, holes: [] }, ...players])
  }

  function resetForm() {
    setPlayers([])
  }

  function onReset() {
    setPlayers([])
  }

  function countScore(playerIndex) {
    const currentPlayer = players[playerIndex]
    const currentScore = currentPlayer.holes[currentHole]?.score ?? 0

    setPlayers([
      ...players.slice(0, playerIndex),
      {
        ...currentPlayer,
        score: currentPlayer.score + 1,
        holes: [
          ...currentPlayer.holes.slice(0, currentHole),
          {
            ...currentPlayer.holes[currentHole],
            score: currentScore + 1,
            name: currentHole + 1,
          },
          ...currentPlayer.holes.slice(currentHole + 1),
        ],
      },
      ...players.slice(playerIndex + 1),
    ])
  }

  function resetScore() {
    setCurrentHole(currentHole + 1)
    players.map(player => (player.score = 0))
  }

  function decrHole() {
    setCurrentHole(currentHole - 1)
  }

  function resetHole() {
    setCurrentHole(0)
  }

  function saveGame() {
    setHistory([{ players, dateOfGame, id: uuidv4() }, ...history])
    setPlayers([])
    setCurrentHole(1)
    push('/history')
  }

  function getAllWeatherData(
    url = `https://api.openweathermap.org/data/2.5/forecast?q=Hamburg,DE&units=metric&appid=${apiKey}`
  ) {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error(
            'Oh, something went wrong. This is not the correct weather for your place. Please try again later.'
          )
        }
        return res.json()
      })
      .then(data => {
        setWeather(data)
      })
      .catch(error => {
        setError(error.message)
      })
  }
}
export const ErrorMessage = styled.div`
  color: var(--error);
  border: 2px solid var(--error);
  border-radius: 8px;
  width: 70%;
  padding: 20px;
`
