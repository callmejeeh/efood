import vector from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import { Container } from '../../styles'
import { Logo, Titulo } from './style'
import { Imagem } from './style'

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${vector})` }}>
    <Container>
      <div className="container">
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
      </div>
    </Container>
  </Imagem>
)

export default Header
