import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CharacterCardList from './components/CharacterCardList';
import PlanetCardList from './components/PlanetCardList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    characterSearchTerm: '',
    planetSearchTerm: ''
  });

  useEffect(() => {
    axios.get('https://dragonball-api.com/api/characters')
      .then(response => setCharacters(response.data.items))
      .catch(error => console.error('Error fetching character data:', error));

    axios.get('https://dragonball-api.com/api/planets')
      .then(response => setPlanets(response.data.items))
      .catch(error => console.error('Error fetching planet data:', error));
  }, []);

  const handleCharacterFilter = () => {
    console.log('Filtering characters:', filters.characterSearchTerm);
  };

  const handlePlanetFilter = () => {
    console.log('Filtering planets:', filters.planetSearchTerm);
  };

  return (
    <Router>
      <div className="container mt-4">
        <Navbar />
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="search">Buscar Personaje:</label>
            <div className="input-group">
              <input
                type="text"
                id="search"
                className="form-control"
                placeholder="Ingrese el nombre del personaje"
                value={filters.characterSearchTerm}
                onChange={e => setFilters({ ...filters, characterSearchTerm: e.target.value })}
              />
              <button className="btn btn-primary" onClick={handleCharacterFilter}>Filtrar personajes</button>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label htmlFor="planetSearch">Buscar Planeta:</label>
            <div className="input-group">
              <input
                type="text"
                id="planetSearch"
                className="form-control"
                placeholder="Ingrese el nombre del planeta"
                value={filters.planetSearchTerm}
                onChange={e => setFilters({ ...filters, planetSearchTerm: e.target.value })}
              />
              <button className="btn btn-primary" onClick={handlePlanetFilter}>Filtrar planetas</button>
            </div>
          </div>
        </div>

        <h1 className='titulo'>Dragon Ball Z</h1>

        <Routes>
          <Route path="/" element={<CharacterCardList characters={characters} searchTerm={filters.characterSearchTerm} />} />
          <Route path="/characters" element={<CharacterCardList characters={characters} searchTerm={filters.characterSearchTerm} />} />
          <Route path="/planets" element={<PlanetCardList planets={planets} searchTerm={filters.planetSearchTerm} />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
