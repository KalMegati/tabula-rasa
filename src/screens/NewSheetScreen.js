import React from 'react';
import { connect } from 'react-redux';
import { createCharacter } from '../actions/actions'

class NewSheetScreen extends React.Component {

  state = {
    name: "",
    blurb: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createCharacter({...this.state, user_id: this.props.user_id})
  }

  render() {
    return (
      <div>

        A new warrior has entered the fray!

        <form onSubmit={e => this.handleSubmit(e)} onChange={(e) => this.setState({[e.target.name]: e.target.value})}>
        NEW CHARACTER
          <br />
          Name: <input type="text" name="name" value={this.state.name}/>
          <br />
          Blurb: <input type="text" name="blurb" value={this.state.blurb}/>
          <br />
          <input type="submit" />
        </form>

      </div>
    );
  }

}

const mapStateToProps = state => {return {user_id: state.user_id}}

const mapDispatchToProps = (dispatch) => {
  return {
    createCharacter: (user) => dispatch(createCharacter(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSheetScreen)

// export default NewSheetScreen