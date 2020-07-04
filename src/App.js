import React from 'react';
import Navbar from './components/Navbar';
import UserContainer from './containers/UserContainer'

import 'bootswatch/dist/cerulean/bootstrap.min.css';
// import 'bootswatch/dist/slate/bootstrap.min.css';
// import 'bootswatch/dist/solar/bootstrap.min.css';

import './App.css';
import { connect } from 'react-redux';
import { fetchUsers } from './actions/actions'

class App extends React.Component {

  // activate = event => {
  //   event.target.classList.add("white-text")
  // }

  // deactivate = event => {
  //   event.target.classList.remove("white-text")
  // }

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Navbar mouse={this.props} />
        <div className="col">
          
        {this.props.users.map(user => <UserContainer active={true} user={user}/>) }

        </div>
        <div className="main-screen">
          
          {/* {this.props.users.map(user => <UserContainer active={true} user={user}/>) } */}
          
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
