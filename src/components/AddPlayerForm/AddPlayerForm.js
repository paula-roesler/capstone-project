import styled from 'styled-components/macro'
import Button from '../Button'

export default function AddPlayerForm({
  onAddPlayer,
  disabled,
  placeholderText,
}) {
  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <Headline>Add Player:</Headline>
        <input
          name="playerName"
          required
          placeholder={placeholderText}
          minLength="2"
          maxLength="30"
          disabled={disabled}
          title="addPlayerInput"
          autoFocus={true}
          autoComplete="off"
        ></input>
      </label>
      <Button disabled={disabled} title="addPlayerButton">
        Add
      </Button>
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

export const Headline = styled.h3`
  color: var(--primary);
  margin-top: 40px;
`

export const Form = styled.form`
  display: grid;
  gap: 20px;
  padding-bottom: 20px;
`
