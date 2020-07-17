// Displays User and conditionally their Characters

import React from 'react';
import CharacterButton from '../components/CharacterButton'

const CharactersContainer = (props) =>
  <div className="btn-group-vertical">
      {props.characters.map(char => 
          <CharacterButton character={char} />    
      )}
  </div>;

export default CharactersContainer