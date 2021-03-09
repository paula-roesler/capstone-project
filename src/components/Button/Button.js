import styled from 'styled-components/macro'

export default styled.button`
  font-family: inherit;
  font-size: inherit;
  color: red;
  background: #ddd;
  border-radius: 4px;
  border: none;
  padding: 6px;
  width: 100%;

  &.active {
    background-color: greenyellow;
    color: royalblue;
  }
`
