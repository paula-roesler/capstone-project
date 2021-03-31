import { Route, Switch } from 'react-router-dom'
import HolePage from '../HolePage'

export default function Holes({
  players,
  countScore,
  visible,
  onNext,
  disabled,
  hole,
}) {
  return (
    <div>
      <Switch>
        <Route path="/one">
          <HolePage
            hole={hole}
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
            disabled={disabled}
          />
        </Route>
        <Route path="/two">
          <HolePage
            hole={hole}
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
            hole={hole}
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
