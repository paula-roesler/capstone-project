import Player from '../Player'

export default function GamePage({ players, onScore }) {
  return (
    <section>
      <h1>Game Page</h1>
      {players.map(({ name, score }, index) => (
        <Player
          key={index}
          player={name}
          score={score}
          onScore={() => onScore(index)}
          disabled={players.length <= 1}
        />
      ))}
    </section>
  )
}
