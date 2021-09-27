import React, { useState } from "react";
import { Route } from "react-router";
import "./App.css";
import Nav from "../components/Nav.jsx";
import Cards from "../components/Cards.jsx";
import About from "../components/About.jsx";
import City from "../components/City.jsx";


function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }
  function onSearch(ciudad) {
    const API = "2bce5d36d238bebc2bd87a2755bb8b7a";
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };

          //constante que guarda el filtro y comparacion de  los valores id de la api con los de el estado
          const cityExists = cities.filter((city) => city.id === ciudad.id);
          console.log("Valor: " + cityExists.length);
          if (cityExists.length > 0) {
            //pregunta si cityExists tiene mas de un elemento
            alert("La ciudad ya existe..!!");
          } else {
            setCities((oldCities) => [...oldCities, ciudad]);
          }
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }
  return (
    <div className="App">
      <Route path="/">
        <Nav onSearch={onSearch} />
        <br />
        <br />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route exact path="/">
        {cities.length > 0 ? (
          <div>
            <Cards cities={cities} onClose={onClose} />
          </div>
        ) : (
          <p className="mensaje">Sin ciudades, Puedes ver el clima de una ciudad desde el buscador</p>
        )}
      </Route>
      {/* <Route exact path="/ciudad/:ciudadId">
         {({match}) => <City city={onFilter(match.params.idCiudad)} />}
      </Route> */}
      <Route
        exact
        path="/ciudad/:idCiudad"
        // cunando se manda props se usa el render sino usar el component
        render={({ match }) => <City city={onFilter(match.params.idCiudad)} />}
      />
    </div>
  );
}

export default App;
