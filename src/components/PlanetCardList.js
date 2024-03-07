import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PlanetCardList() {
  const [planets, setPlanets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://dragonball-api.com/api/planets')
      .then(response => setPlanets(response.data.items))
      .catch(error => console.error('Error fetching planets:', error));
  }, []);

  const filteredPlanets = planets.filter(planet =>
    planet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="search">Buscar Planeta:</label>
          <div className="input-group">
            <input
              type="text"
              id="search"
              className="form-control"
              placeholder="Ingrese el nombre del planeta"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredPlanets.map(planet => (
          <div key={planet.id} className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <p className="card-text">Descripción: {planet.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlanetCardList;
