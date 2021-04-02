import styled from 'styled-components/macro'

export default function HoleGraphic({ src, alt }) {
  return (
    <GraphicOfHole src={src} alt={alt} width="200" height="300"></GraphicOfHole>
  )
}

export const GraphicOfHole = styled.img`
  margin: auto 0;
`
