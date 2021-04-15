import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { ReactComponent as Home } from '../../assets/home.svg'
import HistoryEntry from '../HistoryEntry'
import Button from '../Button'

export default function HistoryPage({ history, resetHoleOne }) {
  const home = <Home />
  return (
    <>
      <NavigationButton as={Link} to="/" onClick={resetHoleOne}>
        {home}
      </NavigationButton>
      <HistoryWrapper>
        <GameHistoryWrapper>
          <h2>Game history</h2>
          {history.map(({ dateOfGame, players, id }) => (
            <HistoryEntry key={id} dateOfGame={dateOfGame} players={players} />
          ))}
        </GameHistoryWrapper>
      </HistoryWrapper>
    </>
  )
}
export const HistoryWrapper = styled.div`
  position: relative;
`
export const GameHistoryWrapper = styled.div`
  display: grid;
  gap: 20px;
`
export const NavigationButton = styled(Button)`
  font-family: inherit;
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  color: var(--secondary);
  border: 1px solid var(--secondary);
  background-color: transparent;
  border-radius: 0;
  padding: 10px 10px;
  width: 50px;
  height: 47px;
  position: absolute;
  top: -1px;
  right: 20px;

  &:hover {
    border: 1px solid var(--white);
    color: var(--white);
  }

  &:disabled {
    background-color: var(--disabled);
  }
`
HistoryPage.propTypes = {
  history: PropTypes.array,
  resetHoleOne: PropTypes.func,
}
