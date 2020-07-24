// handles User creation, login, and logout

import React from 'react';
import { connect } from 'react-redux';
import { createUser, loginUser, logoutUser } from '../actions/actions'

class LoginScreen extends React.Component {

  state = {
    handle: "",
    password: "",
    password_confirmation: ""
  }

  handleSignup = (event) => {
    event.preventDefault()
    this.props.createUser(this.state)
  }

  handleLogin = (event) => {
    event.preventDefault()
    this.props.loginUser(this.state)
  }

  handleLogout = () => {
    this.props.logoutUser()
  }

  render() {
    return (
      <div>

        <form onSubmit={e => this.handleSignup(e)} onChange={(e) => this.setState({[e.target.name]: e.target.value})}>
          SIGN UP
          <br />
          Handle: <input type="text" name="handle" value={this.state.handle}/>
          <br />
          Password: <input type="text" name="password" value={this.state.password}/>
          <br />
          Confirm: <input type="text" name="password_confirmation" value={this.state.password_confirmation}/>
          <br />
          <input type="submit" />
        </form>

        <br />

        <form onSubmit={e => this.handleLogin(e)} onChange={(e) => this.setState({[e.target.name]: e.target.value})}>
          LOG IN
          <br />
          Handle: <input type="text" name="handle" value={this.state.handle}/>
          <br />
          Password: <input type="text" name="password" value={this.state.password}/>
          <br />
          Confirm: <input type="text" name="password_confirmation" value={this.state.password_confirmation}/>
          <br />
          <input type="submit" />
        </form>

        <br />

        <button onClick={this.handleLogout}>KILL</button>

      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(createUser(user)),
    loginUser: (user) => dispatch(loginUser(user)),
    logoutUser: () => dispatch(logoutUser())
  }
}

export default connect(null, mapDispatchToProps)(LoginScreen)