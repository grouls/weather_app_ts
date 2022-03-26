import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config }                    from './config';

type Weather = {
    name: string,
    main: {
      feels_like: number,
      temp: number,
      humidity: number
    },
    sys: {
      sunrise: number,
      sunset: number
    },
    weather: Object
}

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.BASE_URL }),
  endpoints: (builder) => ({
    getWeatherByCity: builder.query<Weather, string>({
      query: city => `/weather?q=${city}&appid=${process.env.REACT_APP_API_URL}`,
      transformResponse: (response:Weather) => {
        const { name, main, sys, weather } = response;
        return {
          'name': name,
          'main': {
            'feels_like': main.feels_like,
            'temp': main.temp,
            'humidity': main.humidity
          },
          'sys': {
            'sunrise': sys.sunrise,
            'sunset': sys.sunset
          },
          'weather': weather
        }
      }
    }),
  }),
})

export const { useGetWeatherByCityQuery } = weatherApi