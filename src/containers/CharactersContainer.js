// Displays User's Characters

import React from 'react';
import CharacterButton from '../components/CharacterButton'

const CharactersContainer = (props) =>
  <div className="btn-group-vertical">
      {props.characters.map(char => // Characters handed down by UserContainer
          <CharacterButton character={char} />    
      )}
  </div>;

export default CharactersContainer