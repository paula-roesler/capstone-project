import Grid from './components/Grid'
import AddPlayerForm from './components/AddPlayerForm/AddPlayerForm'
import CountScore from './components/CountScore'

export default function App() {
  return (
    <Grid>
      <AddPlayerForm />
      <CountScore />
    </Grid>
  )
}
