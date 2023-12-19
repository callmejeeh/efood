import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.rosaFundo2};
  padding: 32px 0;
  font-size: 14px;
`

export const LogoFooter = styled.div`
  display: flex;
  margin-top: 16px;
  margin-left: 620px;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Link = styled.a`
  color: ${cores.rosa};
  text-decoration: none;
  margin-left: 640px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;

  p {
    margin-left: 540px;
  }
`
