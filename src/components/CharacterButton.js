import React from 'react';
import { NavLink } from 'react-router-dom';

class CharacterButton extends React.Component {
  render() {
    return (
      <NavLink to={`/characters/${this.props.character.id}`}>
        <button
            className="btn btn-secondary"
        >{this.props.character.name}</button>
      </NavLink>
    );
  }
}

export default CharacterButton;

