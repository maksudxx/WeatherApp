import { Route } from "react-router";
import "./App.css";
import Nav from "../components/Nav/Nav.jsx";
import Cards from "../components/Cards/Cards.jsx";
import About from "../components/About/About.jsx";
import City from "../components/City/City.jsx";
import { useWeather } from "../Hooks/useWeather.jsx";
function App() {
  const { cities, onClose, onFilter, onSearch } = useWeather();
  return (
    <div className="App">
      <Route path="/">
        <Nav onSearch={onSearch} />
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
          <p className="mensaje">
            Sin ciudades, Puedes ver el clima de una ciudad desde el buscador
          </p>
        )}
      </Route>
      <Route
        exact
        path="/ciudad/:idCiudad"
        render={({ match }) => <City city={onFilter(match.params.idCiudad)} />}
      />
    </div>
  );
}

export default App;
