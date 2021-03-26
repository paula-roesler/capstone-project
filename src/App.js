import { Route, Switch, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { loadFromLocal, saveToLocal } from './lib/localStorage'
import Grid from './components/Grid'
import NewGamePage from './components/NewGamePage'
import HistoryPage from './components/HistoryPage'
import Holes from './components/Holes'
import ShowWinner from './components/ShowWinner'

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
        <Holes
          players={players}
          countScore={countScore}
          saveScore={saveScore}
          onReset={onReset}
          onSave={saveGame}
        />
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

  function saveScore() {
    // console.log(players[0].score)
    console.log(players)
  }

  function saveGame() {
    setHistory([{ players, dateOfGame }, ...history])
    setPlayers([])
    push('/history')
  }
}
