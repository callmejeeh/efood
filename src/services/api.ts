import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import TypeRestaurant from '../types/restaurant'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRests: builder.query<TypeRestaurant, void>({
      query: () => 'Restaurantes'
    })
  })
})

export const { useGetRestsQuery } = api

export default api
