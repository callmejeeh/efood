import { Container, FooterSection, Link, Links, LogoFooter } from './styles'
import logo from '../../assets/images/logo.png'
import redes from '../../assets/images/redes sociais.png'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <LogoFooter>
          <img src={logo} alt="logo" />
        </LogoFooter>
        <Links>
          <li>
            <Link>
              <img src={redes} />
            </Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <p>{currentYear} - &copy; Efood Todos os direitos reservados</p>
      </FooterSection>
    </div>
  </Container>
)

export default Footer
