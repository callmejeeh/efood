import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import TypeRestaurant from '../../types/restaurant'
import TypeMenu from '../../types/menu'

type CartState = {
  items: TypeRestaurant[]
  isOpen: boolean
  item: TypeMenu[]
}

const initialState: CartState = {
  items: [],
  item: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TypeMenu>) => {
      state.item.push(action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close } = cartSlice.actions
export default cartSlice.reducer
