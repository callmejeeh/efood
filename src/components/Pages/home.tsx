import RestaurantList from '../RestaurantList'
import Restaurant from '../models/restaurant'

import Sushi from '../../assets/images/sushi.png'
import Italiana from '../../assets/images/italiana.png'
import Header from '../Header'
import Footer from '../Footer'

const listaRestaurantes: Restaurant[] = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    imagem: Sushi,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    nota: '4.9',
    categoria: ['Japonesa', 'Destaque']
  },
  {
    id: 2,
    titulo: 'La Dolce Vita Trattoria',
    imagem: Italiana,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nota: '4.6',
    categoria: ['Italiana']
  },
  {
    id: 2,
    titulo: 'La Dolce Vita Trattoria',
    imagem: Italiana,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nota: '4.6',
    categoria: ['Italiana']
  }
]

const Home = () => (
  <>
    <Header />
    <RestaurantList restaurant={listaRestaurantes} />
    <Footer />
  </>
)

export default Home
