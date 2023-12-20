import { Container, FooterSection, Link, Links, LogoFooter } from './styles'
import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container className="container">
    <FooterSection>
      <LogoFooter>
        <img src={logo} alt="logo" />
      </LogoFooter>
      <Links>
        <li>
          <Link>
            <img src={instagram} />
          </Link>
          <Link>
            <img src={facebook} />
          </Link>
          <Link>
            <img src={twitter} />
          </Link>
        </li>
      </Links>
    </FooterSection>
    <FooterSection>
      <p>{currentYear} - &copy; Efood Todos os direitos reservados</p>
    </FooterSection>
  </Container>
)

export default Footer
