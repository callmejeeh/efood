import styled from 'styled-components'
import { cores } from '../../styles'

export const CardRest = styled.div`
  border: 1px solid ${cores.rosa};
  padding: 8px;
  position: relative;
  max-width: 470px;
  margin-top: 80px;
  margin-left: 80px;

  img {
    max-width: 450px;
    margin-bottom: 4px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: inline;
  margin-bottom: 16px;
  max-width: 200px;
`
export const Nota = styled(Titulo)`
  font-weight: bold;
  font-size: 16px;
  display: inline;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`
