// import styled from 'styled-components/macro'
// import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from '../Button'

export default function AddPlayerForm() {
  return (
    <Form>
      <label>
        Add Player:
        <input
          name="playersName"
          required
          placeholder="players name goes here"
          minLength="2"
          maxLength="30"
        ></input>
      </label>
      <Button>add</Button>
    </Form>
  )
}

export const Form = styled.form`
  display: grid;
  gap: 10px;
`

// AddPlayerForm.PropTypes = {}
// AddPlayerForm.defaultProps = {}
