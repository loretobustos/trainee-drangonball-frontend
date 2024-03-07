import React from 'react';
import './CharacterDetails.css'

const CharacterDetails = ({ character }) => {
  return (
    <div className='caja'>
      <h2 className='name'>{character.name}</h2>
      <p className='poderes'>Raza: {character.race}</p>
      <p className='poderes1'>Descripción: {character.description}</p>
    </div>
  );
}

export default CharacterDetails;
