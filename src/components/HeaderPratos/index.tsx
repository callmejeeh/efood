import { Carrinho, Imagem, Logo, Titulo, Voltar } from './style'
import logo from '../../assets/images/logo.png'
import vector from '../../assets/images/fundo.png'
import { Container, cores } from '../../styles'
import { Link } from 'react-router-dom'

const HeaderPratos = () => (
  <Imagem style={{ backgroundImage: `url(${vector})` }}>
    <Container>
      <Link style={{ color: `${cores.rosa}` }} to="/">
        <Voltar>Restaurantes</Voltar>
      </Link>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <Titulo>0 Produto(s) no carrinho</Titulo>
    </Container>
  </Imagem>
)

export default HeaderPratos
