import React, { useState } from 'react';
const api = {
  key:"0c31dc574b08ab5592fc992ac79afe78" ,
  base:"https://api.openweathermap.org/data/2.5/"
}

function App() {
  const[query, setQuery]= useState('');
  const [weather, setWeather]= useState({});

  const search = evt =>{
    if (evt.key === "Enter"){
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=0c31dc574b08ab5592fc992ac79afe78`)
      
      .then(res => res.json())
      .then(result =>{
        
        setWeather(result);
        setQuery('');
        console.log(result);
    });
    }
  }


const dateBuilder = (d) =>{
 let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 
 let day = days[d.getDay()];
 let date = d.getDate();
 let month = months[d.getMonth()];
 let year = d.getFullYear();

 return `${day} ${date} ${month} ${year}`
}
  return (
    <div className={
      (typeof weather.main != "undefined")
      ? ((weather.main.temp > 16)
      ? 'app warm'
      : 'app')
      : 'app'}>
      <main> 
        <div className="search-box">
          <input type="text" className="search-bar" 
          placeholder="Enter Your Location"
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          />
            
         </div>
        {(typeof weather.main != "undefined") ? (
      <div>
        <div className="location-box">
          <div className="location">{weather.name},{weather.sys.country}</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>

        <div className="weather-box">
          <div className="temp">
            {Math.round(weather.main.temp)}°c
          </div>
          <div className="weather">{weather.weather[0].main}</div>
        </div>
        <div className="detailsbox">
          <p className="details">Details : </p>
          <span className="content">Feels Like : </span>
          <span className="content">{Math.round(weather.main.feels_like)}°c</span>
          
          <span className="content"> Visibility :</span>
          <span className="content">{weather.visibility} m</span>
          <span className="content"> Humudity :</span>
          <span className="content">{weather.main.humidity} %</span>
          <span className="content"> Wind Speed :</span>
          <span className="content">{weather.wind.speed} km/h</span>
        </div>
      </div>
      ) : ('')}
      </main>
    </div>
  );
}

export default App;
