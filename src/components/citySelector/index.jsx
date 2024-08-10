
function CitySelector({ cities, onSelectCity }) {


  return (
    <form>
      <h1 >Select a city </h1>
      <select id="city" onChange={(e) => onSelectCity(e.target.value)}>
       
        {cities.map((city, index) => (
          <option key={index} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </form>
  );
}
export default CitySelector;
