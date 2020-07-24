// updates User information, currently only updates styling

import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions/actions'

class SettingsScreen extends React.Component {

  state = {
    stateStyle: "cerulean"
  }

  handleClick = (event) => {
    console.log(event.target)
    this.setState({stateStyle: event.target.value})
  }

  handleSubmit = () => {
    this.props.updateUser({style: this.state.stateStyle}, this.props.user_id)
  }

  render() {
    return (
      <div>
        <div class="btn-group">

          <button type="button" class="btn btn-secondary" value="cerulean"
            onClick={ (e) => this.handleClick(e) }
          >Cerulean</button>

          <button type="button" class="btn btn-secondary" value="journal"
            onClick={ (e) => this.handleClick(e) }
          >Journal</button>

          <button type="button" class="btn btn-secondary" value="slate"
            onClick={ (e) => this.handleClick(e) }
          >Slate</button>

          <button type="button" class="btn btn-primary"
            onClick={this.handleSubmit}
          >Style Switch</button>

        </div>
        <br />
        <br />
        <br />
        <p>Style changes may require page refresh to complete.</p>
      </div>
    );
  }

}

const mapStateToProps = state => {return {user_id: state.user_id}}

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (user, user_id) => dispatch(updateUser(user, user_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
