// import styled from 'styled-components/macro'
// import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from '../Button'

export default function AddPlayerForm({ onAddPlayer }) {
  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Add Player:
        <input
          name="playerName"
          required
          placeholder="players name goes here"
          minLength="2"
          maxLength="30"
        ></input>
      </label>
      <Button>add</Button>
    </Form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { playerName } = form.elements

    onAddPlayer({
      nameOfPlayer: playerName.value,
    })
    form.reset()
    playerName.focus()
  }
}

export const Form = styled.form`
  display: grid;
  gap: 10px;
`

// AddPlayerForm.PropTypes = {}
// AddPlayerForm.defaultProps = {}
