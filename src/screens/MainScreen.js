import React from 'react';
import { Route } from 'react-router-dom';

import WelcomeScreen from './WelcomeScreen'
import SettingsScreen from './SettingsScreen'
import LoginScreen from './LoginScreen'
import AboutScreen from './AboutScreen'
import NewSheetScreen from './NewSheetScreen'
import CharacterScreen from './CharacterScreen'
import ElementScreen from './ElementScreen'
// import CharacterSheet from '../components/CharacterSheet'
 
// Here we add `match` to the arguments so we can access the path information 
// in `routerProps` that is passed from App.js 
class MainScreen extends React.Component {

  render() {
    return (
      <div className="main-screen">
        <Route path="/welcome" component={WelcomeScreen} />
        <Route path="/settings" component={SettingsScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/about" component={AboutScreen} />
        <Route path="/newsheet" component={NewSheetScreen} />
        {/* <Route path='/characters' render={routerProps => <CharacterScreen {...routerProps} characters={this.props.characters}/>} /> */}
        <Route 
            path="/characters/:characterId"
            render={routerProps => {
                return <CharacterScreen {...routerProps} characters={this.props.characters} />
            }}
        />
        <Route path='/elementedit' component={ElementScreen} />
      </div>
    );
  }

  
}

export default MainScreen