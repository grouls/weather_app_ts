import { useGetWeatherByCityQuery } from '../services/weather';
import './Main.css';

const Main = () => {
  const { data, error, isLoading } = useGetWeatherByCityQuery('dublin');
console.log(data)
  return(
    <section>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h1>Weather goes here</h1>
        </>
      ) : null}
    </section>
  )
};

export default Main;