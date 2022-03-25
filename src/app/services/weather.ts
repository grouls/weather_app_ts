import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config }                    from '../config';

type City = {
    data: {
      name: string
    }
}
export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.BASE_URL }),
  endpoints: (builder) => ({
    getWeatherByCity: builder.query<City, string>({
      query: city => `/weather?q=${city}&appid=${config.API_KEY}`,
      transformResponse: (response:any) => response,
    }),
  }),
})

export const { useGetWeatherByCityQuery } = weatherApi