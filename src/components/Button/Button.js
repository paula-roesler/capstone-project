import styled from 'styled-components/macro'

export default styled.button`
  font-family: inherit;
  font-size: inherit;
  color: #444;
  background: #ddd;
  border: none;
  padding: 10px;
  width: 100%;

  &:disabled {
    color: #999;
    background: #ddd;
  }
`
