import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class CharacterScreen extends React.Component {

    character = () => {
      const id = this.props.match.params.characterId
      return this.props.characters.find(
        character => character.id === parseInt(id)
      )
    }

    render() {
      return (
        <div>
          <h1>{this.character().name}</h1><br />
          <NavLink to={`/elementedit/${this.character().id}`}>
            <button type="button"
              className="btn btn-outline-secondary"
            >New Element</button>
          </NavLink>
        </div>
      );
    }

}

export default CharacterScreen