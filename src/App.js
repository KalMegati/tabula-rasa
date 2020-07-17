import React from 'react';
import Navbar from './components/Navbar';
import UserContainer from './containers/UserContainer'

import { connect } from 'react-redux';
import { fetchUsers } from './actions/actions'

import MainScreen from './screens/MainScreen'

class App extends React.Component {

  componentDidMount() {
    console.log("fetching Users")
    this.props.fetchUsers()
  }

  makeCharacters() {
    if (this.props.users.length > 0) {
      return this.props.users.map(user => user.characters).flat()
    } else {
      return []
    }
  }

  loadingBuffer = () => {
    if (this.state && this.state.loading) {
      return <h1>LOADING</h1>
    } else {
      return (<div>
        <div className="menu-screen">
          {this.props.users.map(user => <UserContainer user={user}/>) }
        </div>
        <MainScreen characters={this.makeCharacters()} />
      </div>)
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar mouse={this.props} />

        {this.loadingBuffer()}

      </div>
    );
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
