import styled from 'styled-components'

export const Imagem = styled.div`
  height: 190px;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    display: block;
    padding-top: 200px;
    justify-content: space-between;
  }
`
export const Titulo = styled.h3`
  font-size: 16px;
  text-align: right;
  padding: 80px;
`
export const Logo = styled.a`
  margin: 32px 450px;
  position: absolute;
`
export const Voltar = styled(Logo)`
  margin-top: 80px;
  margin-left: 10px;
`
export const Carrinho = styled.p`
  margin: 80px 10px 0 450px;
`
