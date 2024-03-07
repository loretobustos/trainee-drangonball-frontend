import React from 'react';
import CharacterCard from './CharacterCard';

function CharacterCardList({ characters, searchTerm }) {
  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {filteredCharacters.map(character => (
        <div key={character.id} className="col">
          <CharacterCard character={character} />
        </div>
      ))}
    </div>
  );
}

export default CharacterCardList;
