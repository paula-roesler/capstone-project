import { Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import Grid from './components/Grid'
import NewGamePage from './components/NewGamePage'
import GamePage from './components/GamePage'

export default function App() {
  const [players, setPlayers] = useState([])

  return (
    <Grid>
      <Switch>
        <Route exact path="/">
          <NewGamePage
            players={players}
            addPlayer={addPlayer}
            resetForm={resetForm}
          />
        </Route>
        <Route path="/playing">
          <GamePage players={players} onScore={countScore} />
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

  function countScore(index) {
    const currentPlayer = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score + 1 },
      ...players.slice(index + 1),
    ])
  }
}
