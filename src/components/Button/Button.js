import styled from 'styled-components/macro'

export default styled.button`
  font-family: inherit;
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  border: none;
  border-radius: 20px;
  padding: 7px 10px 10px;
  width: 70%;
  height: 40px;
  margin: 0 auto;
  color: ${props => (props.txtcolor ? props.txtcolor : 'var(--background)')};
  background-color: ${props =>
    props.bgcolor ? props.bgcolor : 'var(--primary)'};

  &:disabled {
    background-color: var(--disabled);
  }
  outline: none !important;
`

