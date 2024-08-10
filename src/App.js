import { useState } from "react";
import "./App.css";
import cities from "./components/citysList/index";
import CitySelector from "./components/citySelector/index";
import CityCard from "./components/cytyCard/index";
function App() {
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  function handleSelectCity (cityName)  {
    const city = cities.find((c) => c.name === cityName);
    setSelectedCity(city);
  };

  return (
    <div className="App">

      <CitySelector cities={cities} onSelectCity={handleSelectCity} />
      <CityCard city={selectedCity} />
    </div>
  );
}

export default App;
