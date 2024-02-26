import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const burgersAPI = createApi({
  reducerPath: 'burgersAPI',
  baseQuery: fetchBaseQuery(
    { baseUrl: 'https://raw.githubusercontent.com/' }
  ),
  endpoints: (builder) => ({
    getBurgers: builder.query({
      query: () => 'Chaooohs/JSON-resume/master/fat-burgers.json'
    })
  })
})

export const {useGetBurgersQuery} = burgersAPI
