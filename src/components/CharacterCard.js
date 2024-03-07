import React, { useState } from 'react';
import CharacterDetails from './CharacterDetails';
import './CharacterCard.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const CharacterCard = ({ character }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  
  return (
    <div className="card h-100">
      <img src={character.image} className="card-img-top" alt={character.name} />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">{character.description}</p>
      </div>
      
      <div className="card boton" onClick={toggleDetails}>
        <h3 className='ver-mas'> Ver Mas</h3>
        {showDetails && <CharacterDetails character={character} />}
      </div>
    </div>
  );
}

export default CharacterCard;
