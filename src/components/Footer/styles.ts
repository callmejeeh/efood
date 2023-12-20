import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.rosaFundo2};
  padding: 32px 512px;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`

export const LogoFooter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 16px;
  padding-left: 300px;
`

export const Link = styled.a`
  color: ${cores.rosa};
  cursor: pointer;
  text-decoration: none;
  position: relative;
  display: inline;
  height: 100%;
  padding: 8px;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
  padding-left: 300px;
`

export const FooterSection = styled.div`
  margin-bottom: 32px;

  p {
    padding-left: 220px;
  }
`
