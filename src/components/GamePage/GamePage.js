import { Link } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components/macro'
import Player from '../Player'
import Button from '../Button'
import ShowWinner from '../ShowWinner'

export default function GamePage({ players, onScore, resetPlayers, winners }) {
  const [visible, setVisible] = useState('whilePlaying')

  return (
    <>
      {visible === 'whilePlaying' && (
        <WrapperGamePage>
          <h1>Score!</h1>
          {players.map(({ name, score }, index) => (
            <Player
              key={index}
              player={name}
              score={score}
              onScore={() => onScore(index)}
              disabled={players.length <= 1}
            />
          ))}
          <Button as={Link} to="/" onClick={onReset}>
            End game
          </Button>

          <Button
            visible={visible}
            onClick={() => {
              setVisible('winner')
            }}
          >
            Show winner!
          </Button>
        </WrapperGamePage>
      )}

      {visible === 'winner' && (
        <>
          <ShowWinner
            hidden={visible}
            title={'Winner'}
            players={players}
            resetPlayers={resetPlayers}
          />
          <Button as={Link} to="/" onClick={onReset}>
            Play again
          </Button>
        </>
      )}
    </>
  )
}

export const WrapperGamePage = styled.div`
  display: grid;
  gap: 10px;
  padding: 10px;
  text-align: center;
  color: var(--primary);
`
