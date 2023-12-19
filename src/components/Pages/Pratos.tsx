import PlateList from '../BodyPratos/listapratos'
import Footer from '../Fotter'
import Header from '../Header'
import Pratos from '../models/pratos'

import pizza from '../../assets/images/Pizza.png'

const DishList: Pratos[] = [
  {
    id: 1,
    titulo: 'Pizza Marguerita',
    imagem: pizza,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 1,
    titulo: 'Pizza Marguerita',
    imagem: pizza,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 1,
    titulo: 'Pizza Marguerita',
    imagem: pizza,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Home = () => (
  <>
    <Header />
    <PlateList plate={DishList} />
    <Footer />
  </>
)

export default Home
