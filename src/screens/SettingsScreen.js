import React from 'react';
import { connect } from 'react-redux';

class SettingsScreen extends React.Component {

  state = {
    stateStyle: "journal"
  }

  handleClick = (event) => {
    console.log(event.target)
    this.setState({stateStyle: event.target.value})
  }

  handleSubmit = () => {
    // console.log(this.state.stateStyle)
    this.props.selectStyle(this.state.stateStyle)
  }

  render() {
    return (
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
    );
  }

}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => {
  return {
    selectStyle: (style) => dispatch({ type: 'SELECT_STYLE', style: style})
  }
}

export default connect(null, mapDispatchToProps)(SettingsScreen);
