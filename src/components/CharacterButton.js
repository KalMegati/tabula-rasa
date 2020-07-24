// clicking on CharacterButton will display the Character's information on MainScreen

import React from 'react';
import { NavLink } from 'react-router-dom';

const CharacterButton = (props) => // Character handed down by CharactersContainer
  <NavLink to={`/characters/${props.character.id}`}>
    <button
        className="btn btn-secondary"
    >{props.character.name}</button>
  </NavLink>;

export default CharacterButton;

