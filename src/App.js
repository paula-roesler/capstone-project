import { Route, Switch, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { loadFromLocal, saveToLocal } from './lib/localStorage'
import Grid from './components/Grid'
import NewGamePage from './components/NewGamePage'
import HistoryPage from './components/HistoryPage'
import Holes from './components/Holes'
import ShowWinner from './components/ShowWinner'

export default function App({ hole }) {
  const [players, setPlayers] = useState([])
  const [history, setHistory] = useState(loadFromLocal('history') ?? [])
  const [score, setScore] = useState(loadFromLocal('score') ?? [0])
  const { push } = useHistory()

  useEffect(() => {
    saveToLocal('history', history)
  }, [history])

  useEffect(() => {
    saveToLocal('score', score)
  }, [score])

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
          bahn={hole}
        />
      </Switch>
    </Grid>
  )

  /*
  const players = [
    {
      name: 'John',
      overAllScore: 5,
      holes: [
        {hole: 'one', score: 1},
        {hole: 'two', score: 3},
        {hole: 'three', score: 1}
      ]
    }
  ]
  */

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
    // setScore(currentPlayer.score)
    // console.log(score)
  }

  // wird ausgelöst bei click auf 'next'
  function saveScore() {
    // speichert für jeden player ein object mit name und score
    const scoreCards = []
    scoreCards.push(
      players.map(player => ({
        name: player.name,
        score: player.score,
      }))
    )
    console.log(scoreCards)

    // setzt leider auch den letzten Score zurück, so dass
    // alle mit 0 das Spiel beenden
    players.map(player => (player.score = 0))
  }

  function saveGame() {
    setHistory([{ players, dateOfGame }, ...history])
    setPlayers([])
    push('/history')
  }
}
