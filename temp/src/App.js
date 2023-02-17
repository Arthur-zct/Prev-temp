import './App.css';
import { useState, useRef, useEffect } from 'react';



function App() {
  const [Tempo, setTempo] = useState()
  const inputRef = useRef();
  
  function NewCity(e) {
    e.preventDefault();
    if(inputRef.current.value != "") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ inputRef.current.value }&units=metric&appid=d2803d4982fc37954de5a241d6db1fb1&lang=pt_br`).then(res => res.json()).then(resp => {
        if(resp.cod == "404"){
          alert("deu merda")
        } else {
          setTempo(resp)
        }
      })
    }
  }

  return (
    <main className="App">
      <form onSubmit={NewCity}>
        <label>
          <span>Digite o nome da cidade:</span>
          <br />
          <input type="text" name="city" placeholder="cidade:" ref={inputRef}/>
        </label>
        <input type="submit" value="Enviar" />
      </form>

      {Tempo && (
        <div>
          <h2>{Tempo.name}</h2>
          <p>{Tempo.main.temp}</p>
          <p>{Tempo.weather[0].description}</p>
          <p>{Tempo.main.humidity}%</p>
          <p><img crossOrigin="anonymous" src={`https://countryflagsapi.com/png/${Tempo.sys.country}`}/></p>
          <p><img src={`http://openweathermap.org/img/wn/${Tempo.weather[0].icon}.png`} /></p>
        </div>
      )}
      
      
    </main>
  );
}

export default App;
