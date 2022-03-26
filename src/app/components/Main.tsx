import { useGetWeatherByCityQuery } from '../services/weather';
import './Main.css';

const Main = () => {
  const { data, error, isFetching } = useGetWeatherByCityQuery('dublin', { pollingInterval: 3000 });

  return(
    <section>
      {error ? (
        <>Oh no, there was an error</>
      ) : isFetching ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h1>{data.name}</h1>
          <ul>
            <li>Temp: {data.main.temp}</li>
            <li>Feels like: {data.main.feels_like}</li>
            <li>Sunrise: {data.sys.sunrise}</li>
            <li>Sunset: {data.sys.sunset}</li>
          </ul>
        </>
      ) : null}
    </section>
  )
};

export default Main;