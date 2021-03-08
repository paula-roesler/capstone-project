import styled from 'styled-components/macro'

export default function Button({ text }) {
  return <TemplateButton>{text}</TemplateButton>
}

const TemplateButton = styled.button`
  font-family: inherit;
  font-size: inherit;
  color: red;
  background: #ddd;
  border-radius: 4px;
  border: none;
  padding: 6px;
  width: 100%;
`
