import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  background-color: ${cores.rosa};
  color: ${cores.branca};
  font-size: 32px;
  font-weight: bold;
  padding: 8px 16px;
  margin-bottom: 16px;
  text-decoration: none;
`
export const ButtonLink = styled(Link)`
  background-color: ${cores.rosa};
  color: ${cores.branca};
  font-size: 12px;
  font-weight: bold;
  padding: 8px 8px;
  text-decoration: none;
  margin-top: 16px;
  margin-bottom: 16px;
`
