import { Route, Switch, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { loadFromLocal, saveToLocal } from './lib/localStorage'
import { v4 as uuidv4 } from 'uuid'
import Grid from './components/Grid'
import NewGamePage from './components/NewGamePage'
import HistoryPage from './components/HistoryPage'
import Holes from './components/Holes'
import ShowWinner from './components/ShowWinner'
import Weather from './components/Weather'

export default function App() {
  const [players, setPlayers] = useState([])
  const [currentHole, setCurrentHole] = useState(0)
  const [history, setHistory] = useState(loadFromLocal('history') ?? [])
  const [weather, setWeather] = useState([])

  useEffect(() => {
    getAllWeatherData()
  }, [])

  const { push } = useHistory()

  const isNextHoleAllowed = players.every(
    player => player.holes.length === currentHole + 1
  )

  useEffect(() => {
    saveToLocal('history', history)
  }, [history])

  let dt = new Date()
  let minute = '' + dt.getMinutes()
  let hour = '' + dt.getHours()
  let month = '' + (dt.getMonth() + 1)
  let day = '' + dt.getDate()
  let year = dt.getFullYear()
  let dateOfGame = `${year}-${month}-${day} (${hour}:${minute})`

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
            <Weather weather={weather} />
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
    url = 'http://api.openweathermap.org/data/2.5/forecast?q=Hamburg,DE&units=metric&appid=8cbab16f78b3f6fcde72b1e740b5e97a'
  ) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setWeather(data)
      })
  }
}
