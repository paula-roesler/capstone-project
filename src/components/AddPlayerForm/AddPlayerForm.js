// import styled from 'styled-components/macro'
// import PropTypes from 'prop-types'
import Button from '../Button'

export default function AddPlayerForm() {
  return (
    <form>
      <label text="AddPlayer">
        Add Player:
        <input
          required
          name="playersName"
          placeholder="players name goes here"
          minLength="2"
          maxLength="30"
        ></input>
      </label>
      <Button>add</Button>
    </form>
  )
}

// AddPlayerForm.PropTypes = {}
// AddPlayerForm.defaultProps = {}
