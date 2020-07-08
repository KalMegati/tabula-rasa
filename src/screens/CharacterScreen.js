import React from 'react';
import { connect } from 'react-redux';

class CharacterScreen extends React.Component {

    character = () => {
      const id = this.props.match.params.characterId
      return this.props.characters.find(
        character => character.id === parseInt(id)
      ).name
    }

    render() {
      return (
      <div>{this.character()}</div>
      );
    }

}

export default CharacterScreen