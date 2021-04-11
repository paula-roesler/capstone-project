import { Route, Switch, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { loadFromLocal, saveToLocal } from './lib/localStorage'
import { v4 as uuidv4 } from 'uuid'
import Grid from './components/Grid'
import NewGamePage from './components/NewGamePage'
import HistoryPage from './components/HistoryPage'
import Holes from './components/Holes'
import ShowWinner from './components/ShowWinner'
import WeatherForecast from './components/WeatherForecast'
import { DateOfGameButton } from './components/HistoryEntry/HistoryEntry'

export default function App() {
  const [players, setPlayers] = useState([])
  const [currentHole, setCurrentHole] = useState(0)
  const [history, setHistory] = useState(loadFromLocal('history') ?? [])

  // Weather API
  const [weather, setWeather] = useState([])
  const apiKey = process.env.REACT_APP_API_KEY
  let day = new Date().getDate()

  useEffect(() => {
    getAllWeatherData()
  }, [])
  // Weather API End

  const { push } = useHistory()

  // funktioniert noch nicht
  const isNextHoleAllowed = players.every(
    player => player.holes.length === currentHole + 1
  )

  useEffect(() => {
    saveToLocal('history', history)
  }, [history])

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  let dateOfGame = new Date().toLocaleDateString('en-EN', options)
  

  return (
    <Grid>
      <Switch>
        <Route exact path="/">
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
            <WeatherForecast weather={weather} day={day}/>
          </div>
        </Route>
        <Holes
          players={players}
          countScore={countScore}
          onNext={resetScore}
          onPrev={decrHole}
          onReset={onReset}
          onSave={saveGame}
          disabled={!isNextHoleAllowed}
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
      .then(res => res.json())
      .then(data => {
        setWeather(data)
      })
  }
}
