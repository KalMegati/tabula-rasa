import React from 'react';
import { connect } from 'react-redux';
import { createElement } from '../actions/actions'
import { withRouter } from 'react-router-dom';

class ElementScreen extends React.Component {

  state = {
    character_id: this.props.match.params.characterId,
    icon1: "",
    icon2: "",
    icon3: "",
    label1: "",
    label2: "",
    label3: "",
    text1: "",
    text2: "",
    text3: "",
    active: "123456789"
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createElement(this.state)
    setTimeout(() => this.props.history.push(`/characters/${this.state.character_id}`), 1000)
  }

  render() {
    return (
      <div>
          <div className="spacer-5"></div>
          <div className="spacer-5"></div>
          <div className="element-screen">
            <form onChange={e => this.setState({[e.target.name]: e.target.value})} onSubmit={e => this.handleSubmit(e)}>
              <input type="text" className="single-entry" name="icon1" value={this.state.icon1} />
              <input type="text" className="short-entry" name="label1" value={this.state.label1} />
              <input type="text" className="single-entry" name="icon2" value={this.state.icon2} />
              <input type="text" className="short-entry" name="label2" value={this.state.label2} />
              <input type="text" className="single-entry" name="icon3" value={this.state.icon3} />
              <input type="text" className="short-entry" name="label3" value={this.state.label3} />
              <textarea className="long-entry" name="text1" value={this.state.text1} />
              <textarea className="long-entry" name="text2" value={this.state.text2} />
              <textarea className="long-entry" name="text3" value={this.state.text3} />
              <input type="submit" />
            </form>
          </div>
          <div className="spacer-5"></div>
          <div className="spacer-5"></div>
          <div className="element-screen">Kiryu</div>
      </div>
    );
  }

}

// const mapStateToProps = state => {return {user_id: state.user_id}}

const mapDispatchToProps = (dispatch) => {
  return {
    createElement: (element) => dispatch(createElement(element)),
  }
}

export default connect(null, mapDispatchToProps)(withRouter(ElementScreen))