import './App.css';
import { useFetch } from './Hooks/useFetch';

function App() {
  let city= "seoul"
  let key = "d2803d4982fc37954de5a241d6db1fb1"
  const products = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}&lang=pt_br`)
  console.log(products)
  
  

  return (
    <div className="App">
      <h1>Boa tarde</h1>
      {products && products.name}
      <br />
      {products && products.main.temp}
      <br />
      {products && products.weather[0].description}
      <br />
      {products && (<img crossOrigin="anonymous" src={`https://countryflagsapi.com/png/${products.sys.country}`}/>)}
      <br />
      {products && products.main.humidity}%
      <br />
      {products && (<img src={`http://openweathermap.org/img/wn/${products.weather[0].icon}.png`} />)}
      
    </div>
  );
}

export default App;
