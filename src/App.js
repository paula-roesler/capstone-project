import { Route, Switch, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Grid from './components/Grid'
import NewGamePage from './components/NewGamePage'
import GamePage from './components/GamePage'
import { loadFromLocal, saveToLocal } from './lib/localStorage'
import HistoryPage from './components/HistoryPage'

export default function App() {
  const [players, setPlayers] = useState([])
  const [history, setHistory] = useState(loadFromLocal('history') ?? [])
  const { push } = useHistory()

  let dt = new Date()
  let minute = '' + dt.getMinutes()
  let hour = '' + dt.getHours()
  let month = '' + (dt.getMonth() + 1)
  let day = '' + dt.getDate()
  let year = dt.getFullYear()
  let dateOfGame = `${year}-${month}-${day} (${hour}:${minute})`

  useEffect(() => {
    saveToLocal('history', history)
  }, [history])

  return (
    <Grid>
      <Switch>
        <Route exact path="/">
          <NewGamePage
            key={players}
            players={players}
            addPlayer={addPlayer}
            resetForm={resetForm}
          />
        </Route>
        <Route path="/game">
          <GamePage
            players={players}
            onScore={countScore}
            onReset={onReset}
            onSave={saveGame}
          />
        </Route>
        <Route path="/history">
          <HistoryPage history={history} />
        </Route>
      </Switch>
    </Grid>
  )

  function addPlayer({ nameOfPlayer }) {
    setPlayers([{ name: nameOfPlayer, score: 0 }, ...players])
  }

  function resetForm() {
    setPlayers([])
  }

  function onReset() {
    setPlayers([])
  }

  function countScore(index) {
    const currentPlayer = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score + 1 },
      ...players.slice(index + 1),
    ])
  }

  function saveGame() {
    setHistory([{ players, dateOfGame, id: uuidv4() }, ...history])
    setPlayers([])
    push('/history')
  }
}
