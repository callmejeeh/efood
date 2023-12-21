import styled from 'styled-components'
import { colors } from '../../styles/styles'
import { LuTrash2 } from 'react-icons/lu'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${colors.lightPink};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.cream};
  margin-top: 40px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.cream};
  padding: 8px 0 8px 8px;
  margin-bottom: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    color: ${colors.lightPink};
    font-weight: bold;
    margin-top: 8px;
  }

  span {
    display: block;
    font-size: 14px;
    color: ${colors.lightPink};
    margin-top: 16px;
  }

  button {
    width: 16px;
    margin-right: 8px;
    margin-bottom: 8px;
    cursor: pointer;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  svg {
      color: ${colors.lightPink};
`
