import styled from 'styled-components'

export default function Grid({ children }) {
  return <GridSystem>{children}</GridSystem>
}

const GridSystem = styled.div`
  display: grid;
  gap: 20px;
  justify-content: center;
`
