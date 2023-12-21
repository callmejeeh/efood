import Button from '../Button'
import { LuTrash2 } from 'react-icons/lu'

import pizza from '../../assets/img/menu/pizza.png'
import { Overlay, CartContainer, Sidebar, Prices, CartItem } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          <CartItem>
            <img src={pizza} />
            <div>
              <h3>Nome do jogo</h3>
              <span>R$ 60,90</span>
              <button type="button">
                <LuTrash2 />
              </button>
            </div>
          </CartItem>
          <CartItem>
            <img src={pizza} />
            <div>
              <h3>Nome do jogo</h3>
              <span>R$ 60,90</span>
              <button type="button">
                <LuTrash2 />
              </button>
            </div>
          </CartItem>
        </ul>
        <Prices>Valor Total</Prices>
        <Prices>R$ 250,00</Prices>
        <Button title="clique aqui para continuar" type="button">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
