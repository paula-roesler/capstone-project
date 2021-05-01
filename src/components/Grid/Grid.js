import styled from 'styled-components'

export default function Grid({ children }) {
  return <GridSystem>{children}</GridSystem>
}

const GridSystem = styled.div`
  display: grid;
  align-content: start;
  gap: 20px;
  position: relative;
  height: 100vh;
  padding: 15px;
`
