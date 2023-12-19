import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  padding: 32px 0;
  background-color: ${cores.rosaFundo};
`

export const List = styled.ul`
  display: grid;
  margin-top: 40px;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
