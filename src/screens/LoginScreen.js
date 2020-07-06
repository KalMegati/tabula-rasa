import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions/actions'

class LoginScreen extends React.Component {

  state = {
    handle: "",
    password: "",
    password_confirmation: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createUser(this.state)
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)} onChange={(e) => this.setState({[e.target.name]: e.target.value})}>
        CREATE USER
        <br />
        Handle: <input type="text" name="handle" value={this.state.handle}/>
        <br />
        Password: <input type="text" name="password" value={this.state.password}/>
        <br />
        Confirm: <input type="text" name="password_confirmation" value={this.state.password_confirmation}/>
        <br />
        <input type="submit" />
      </form>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(createUser(user))
  }
}

export default connect(null, mapDispatchToProps)(LoginScreen)