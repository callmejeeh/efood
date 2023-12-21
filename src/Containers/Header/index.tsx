import { BsCart3 } from 'react-icons/bs'

import logo from '../../assets/img/logo.svg'

import * as S from './styles'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderContainer>
      <div className="container">
        <S.HeaderLink to="/">Restaurantes</S.HeaderLink>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div onClick={openCart}>
          {items.length} produtos <BsCart3 />
        </div>
      </div>
    </S.HeaderContainer>
  )
}

export default Header
