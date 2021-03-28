import { Route, Switch } from 'react-router-dom'
import HolePage from '../HolePage'

export default function Holes({
  players,
  countScore,
  saveScore,
  visible,
  onReset,
}) {
  return (
    <div>
      <Switch>
        <Route path="/one">
          <HolePage
            hole="Hole one"
            src="./../images/Test-svg.svg"
            alt="Hole One"
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
            prev="/one"
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
      </Switch>
    </div>
  )
}
