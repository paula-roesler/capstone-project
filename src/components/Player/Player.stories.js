import Player from './Player'

export default {
  title: 'Player',
  component: 'Player',
}

const DefaultPlayer = args => <Player {...args} />

export const SinglePlayer = DefaultPlayer.bind({})
SinglePlayer.args = {
  player: 'Sue',
  score: 22,
}
