import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type City = {
    data: {
      name: string
    }
}
export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),
  endpoints: (builder) => ({
    getWeatherByCity: builder.query<City, string>({
      query: city => `/weather?q=${city}&appid=${process.env.API_KEY}`,
      transformResponse: (response:any) => response,
    }),
  }),
})

export const { useGetWeatherByCityQuery } = weatherApi