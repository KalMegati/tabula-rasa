// Displays User; clicking on User will display their Characters

import React from 'react';

import UserButton from '../components/UserButton'
import CharactersContainer from './CharactersContainer'

class UserContainer extends React.Component {

    state = { active: false } // CharactersContainer defaults to closed

    activate = (name) => {
        this.setState({ active: !this.state.active }) // clicking on a User will open or close their CharactersContainer
    }

    render() {
      return (
        <div>
            <UserButton 
                user={this.props.user} // User handed down by App
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