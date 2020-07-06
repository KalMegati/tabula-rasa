import React from 'react';
import Navbar from './components/Navbar';
import UserContainer from './containers/UserContainer'

// import 'bootswatch/dist/cerulean/bootstrap.min.css';
// import 'bootswatch/dist/slate/bootstrap.min.css';
// import 'bootswatch/dist/journal/bootstrap.min.css';

// import './App.css';
import { connect } from 'react-redux';
import { fetchUsers } from './actions/actions'

import { Route } from 'react-router-dom';

import WelcomeScreen from './screens/WelcomeScreen'
import SettingsScreen from './screens/SettingsScreen'
import LoginScreen from './screens/LoginScreen'
import AboutScreen from './screens/AboutScreen'

class App extends React.Component {

  // activate = event => {
  //   event.target.classList.add("white-text")
  // }

  // deactivate = event => {
  //   event.target.classList.remove("white-text")
  // }

  componentDidMount() {
    console.log("joj")
    this.props.fetchUsers()
  }

  render() {
    return (
      <div className="App">
        <Navbar mouse={this.props} />
        <div className="menu-screen">
          
        {this.props.users.map(user => <UserContainer user={user}/>) }

        </div>
        <div className="main-screen">
          
          {/* <SheetContainer /> */}

          <Route path="/welcome" component={WelcomeScreen} />
          <Route path="/settings" component={SettingsScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/about" component={AboutScreen} />
          
        </div>
      </div>
    );
  }
}

{/* <div class="btn-group-vertical">
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
</div> */}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
