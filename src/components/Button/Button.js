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
  color: ${props => (props.txtColor ? props.txtColor : 'var(--white)')};
  background-color: ${props =>
    props.bgColor ? props.bgColor : 'var(--primary)'};

  &:disabled {
    background-color: var(--disabled);
  }
`

// const StyledLink = styled(Link)`
//   text-decoration: none;

//   &:focus,
//   &:hover,
//   &:visited,
//   &:link,
//   &:active {
//     text-decoration: none;
//   }
// `

// export default props => <StyledLink {...props} />
