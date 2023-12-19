import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  preta: '#111111',
  rosa: '#E66767',
  rosaFundo: '#fff8f2'
}

export const GlobalCss = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto;
    list-style: none;
}

body{
  background-color: ${cores.rosaFundo};
  color: ${cores.rosa};
}

.container{
  max-width: 1024px;
  width: 100%;
}
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
