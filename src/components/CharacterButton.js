import React from 'react';
import { NavLink } from 'react-router-dom';

const CharacterButton = (props) => 
  <NavLink to={`/characters/${props.character.id}`}>
    <button
        className="btn btn-secondary"
    >{props.character.name}</button>
  </NavLink>;

export default CharacterButton;

