import React from 'react';
import { connect } from 'react-redux';
import CharacterSheet from '../components/CharacterSheet'
import { Route } from 'react-router-dom';

const CharacterScreen = ({ match, characters }) => (
        
    <Route 
        path={`${match.url}/:characterId`} 
        render={routerProps => {
            return <CharacterSheet {...routerProps} characters={characters} />
        }}
    />

)

export default CharacterScreen