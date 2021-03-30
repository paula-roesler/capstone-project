import { Route, Switch } from 'react-router-dom'
import HolePage from '../HolePage'

export default function Holes({ players, countScore, visible, onNext }) {
  return (
    <div>
      <Switch>
        <Route path="/one">
          <HolePage
            hole="1"
            src="./../images/Hole-1.svg"
            alt="Hole One"
            par="Par 4"
            distMen="yellow 351m"
            distWomen="red 331m"
            players={players}
            onScore={countScore}
            resetScore={onNext}
            prev="/"
            next="/two"
          />
        </Route>
        <Route path="/two">
          <HolePage
            hole="2"
            src="./../images/Hole-2-green.svg"
            par="Par 3"
            distMen="yellow 351m"
            distWomen="red 331m"
            players={players}
            onScore={countScore}
            resetScore={onNext}
            prev="/one"
            next="/eighteen"
          />
        </Route>
        <Route path="/eighteen">
          <HolePage
            hole="18"
            img="graphic"
            par="Par 5"
            distMen="yellow 351m"
            distWomen="red 331m"
            players={players}
            visible={visible}
            onScore={countScore}
            prev="/two"
            next="/winner"
          />
        </Route>
      </Switch>
    </div>
  )
}
