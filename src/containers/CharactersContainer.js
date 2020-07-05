// Displays User and conditionally their Characters

import React from 'react';
import { connect } from 'react-redux';

import CharacterButton from '../components/CharacterButton'

class CharactersContainer extends React.Component {

    render() {
      return (
        <div className="btn-group-vertical">
            {this.props.characters.map(char => 
                <CharacterButton character={char} />    
            )}
        </div>
      );
    }

}

export default CharactersContainer