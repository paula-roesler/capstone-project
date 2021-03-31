import { Route, Switch, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { loadFromLocal, saveToLocal } from './lib/localStorage'
import Grid from './components/Grid'
import NewGamePage from './components/NewGamePage'
import HistoryPage from './components/HistoryPage'
import Holes from './components/Holes'
import ShowWinner from './components/ShowWinner'
// import ScoreCard from './components/ScoreCard'

export default function App({ hole }) {
  const [players, setPlayers] = useState([])
  const [currentHole, setCurrentHole] = useState(0)
  const [history, setHistory] = useState(loadFromLocal('history') ?? [])

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
          onNext={resetScore}
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

  // click auf Scorebutton
  function countScore(playerIndex, hole) {
    const currentPlayer = players[playerIndex]
    const currentScore = currentPlayer.holes[currentHole]?.score ?? 0

    setPlayers([
      ...players.slice(0, playerIndex),
      {
        ...currentPlayer,
        score: currentPlayer.score + 1,
        holes: [
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

    console.log(players)
  }

  // zusammen zählen des Scores
  function calculateScore(holes) {
    return holes.reduce((acc, hole) => acc + hole.score, 0)
  }

  // click auf next
  function resetScore() {
    setCurrentHole(currentHole + 1)
    players.map(player => (player.score = 0))
  }

  function saveGame() {
    setHistory([{ players, dateOfGame }, ...history])
    setPlayers([])
    push('/history')
  }
}
