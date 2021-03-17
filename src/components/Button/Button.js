import styled from 'styled-components/macro'

export default styled.button`
  font-family: inherit;
  font-size: 16px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  border: none;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  height: 40px;
  color: ${props => (props.txtcolor ? props.txtcolor : 'var(--white)')};
  background-color: ${props =>
    props.bgcolor ? props.bgcolor : 'var(--primary)'};

  &:disabled {
    background-color: var(--disabled);
  }
`
