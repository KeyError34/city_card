import React from 'react';

const CityCard = ({ city }) => {
  if (!city) {
    return <p>Select a city to see information.</p>;
  }

  return (
    <div className="city-card">
      <h2>{city.name}</h2>
      <img src={city.imageUrl} alt={city.name}  />
      <p>{city.description}</p>
      <h3>Interesting facts:</h3>
      <ul>
        {city.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default CityCard;
