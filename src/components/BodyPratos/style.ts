import styled from 'styled-components'
import { cores } from '../../styles'

export const CardPratos = styled.div`
  background-color: ${cores.rosa};
  padding: 8px;
  position: relative;
  max-width: 350px;
  margin-top: 80px;
  margin-bottom: 80px;

  img {
    width: 330px;
    margin-bottom: 4px;
    align-items: center;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  color: ${cores.branca};
  font-size: 18px;
  display: inline;
  margin-bottom: 16px;
  max-width: 200px;
`

export const Descricao = styled.p`
  font-size: 14px;
  color: ${cores.branca};
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const BotaoPrato = styled.button`
  background-color: ${cores.branca};
  color: ${cores.rosa};
  font-size: 12px;
  font-weight: bold;
  padding: 8px 8px;
  text-decoration: none;
  margin-top: 16px;
  width: 330px;
  border: none;
  margin-bottom: 16px;
`

export const ListPratos = styled.ul`
  display: grid;
  margin-top: 40px;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 24px;
  margin-left: 4px;
`
