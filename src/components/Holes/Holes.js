import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../Button'
import HolePage from '../HolePage'

export default function Holes({
  players,
  scoreMinus,
  scorePlus,
  visible,
  onNext,
  onPrev,
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
            distMen="351"
            distWomen="331"
            players={players}
            onPlus={scorePlus}
            onMinus={scoreMinus}
            resetScore={onNext}
            onPrev={onPrev}
            prev="/"
            next="/two"
            disabled={disabled}
          />
        </Route>
        <Route path="/two">
          <HolePage
            hole={hole}
            src="./../images/Hole-2.svg"
            par="Par 3"
            distMen="351"
            distWomen="331"
            players={players}
            onPlus={scorePlus}
            onMinus={scoreMinus}
            resetScore={onNext}
            onPrev={onPrev}
            disabled={disabled}
            prev="/one"
            next="/three"
          />
        </Route>
        <Route path="/three">
          <HolePage
            hole={hole}
            src="./../images/Hole-18.svg"
            par="Par 5"
            distMen="351"
            distWomen="331"
            players={players}
            visible={visible}
            onPlus={scorePlus}
            onMinus={scoreMinus}
            onPrev={onPrev}
            disabled={disabled}
            prev="/two"
            next="/winner"
          />
        </Route>
      </Switch>
    </div>
  )
}

export const NavButtonLeft = styled(Button)`
  width: 40px;
  height: 40px;
  border-radius: none;
  position: absolute;
  left: -10px;
  top: 120px;
  color: var(--primary);
  background-color: var(--background);
`

export const NavButtonRight = styled(Button)`
  width: 40px;
  height: 40px;
  border-radius: none;
  position: absolute;
  right: 5px;
  top: 120px;
  color: var(--primary);
  background-color: var(--background);
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-items: space-between;
  position: relative;
`

Holes.propTypes = {
  players: PropTypes.array,
  countScore: PropTypes.func,
  onPlus: PropTypes.func,
  onMinus: PropTypes.func,
  visible: PropTypes.bool,
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
  disabled: PropTypes.bool,
  hole: PropTypes.number,
}
