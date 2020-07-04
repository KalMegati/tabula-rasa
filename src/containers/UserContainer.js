// Displays User and conditionally their Characters

import React from 'react';
import { connect } from 'react-redux';

import UserButton from '../components/UserButton'
import CharactersContainer from './CharactersContainer'

class UserContainer extends React.Component {

    state = { active: false }

    activate = (name) => {
        this.setState({ active: !this.state.active })
    }

    render() {
      return (
        <div>
            <UserButton 
                user={this.props.user}
                activate={this.activate}
            />
            {(this.state.active ? <CharactersContainer
                characters={this.props.user.characters}
            /> : null )}
        </div>
      );
    }

}

export default UserContainer