import { Route, Switch, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Grid from './components/Grid'
import NewGamePage from './components/NewGamePage'
import GamePage from './components/GamePage'
import { loadFromLocal, saveToLocal } from './lib/localStorage'
import HistoryPage from './components/HistoryPage'
import HolePage from './components/HolePage'
import ShowWinner from './components/ShowWinner'

export default function App() {
  const [players, setPlayers] = useState([])
  const [history, setHistory] = useState(loadFromLocal('history') ?? [])
  const [visible, setVisible] = useState('whilePlaying')
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
        <Route path="/one">
          <HolePage
            hole="Hole one"
            src="./../images/h-one.jpg"
            alt="test"
            par="Par 4"
            distMen="yellow 351m"
            distWomen="red 331m"
            players={players}
            onScore={countScore}
            onSaveScore={saveScore}
            prev="/"
            next="/two"
          />
        </Route>
        <Route path="/two">
          <HolePage
            hole="Hole two"
            img="Graphic"
            par="Par 3"
            distMen="yellow 351m"
            distWomen="red 331m"
            players={players}
            onScore={countScore}
            onSaveScore={saveScore}
            prev="/two"
            next="/eighteen"
          />
        </Route>
        <Route path="/eighteen">
          <HolePage
            hole="Hole eighteen"
            img="graphic"
            par="Par 5"
            distMen="yellow 351m"
            distWomen="red 331m"
            players={players}
            visible={visible}
            onScore={countScore}
            onSaveScore={saveScore}
            onReset={onReset}
            prev="/two"
            next="/winner"
          />
        </Route>
        <Route path="/winner">
          <ShowWinner
            players={players}
            hidden={visible}
            title={'Winner'}
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
