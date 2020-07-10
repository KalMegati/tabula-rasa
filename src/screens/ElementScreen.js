import React from 'react';
import { connect } from 'react-redux';
import { createElement } from '../actions/actions'
import { withRouter } from 'react-router-dom';
import Element from '../components/Element'

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
    active_array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createElement(
      {...this.state, active: this.state.active_array.join("")},
      this.props.history
    )
    // .then(response => this.props.history.push(`/characters/${this.state.character_id}`))
    // setTimeout(() => this.props.history.push(`/characters/${this.state.character_id}`), 1000)
    // this.props.history.push(`/characters/${this.state.character_id}`)
  }

  makeCheckboxes = () => {
    return [0,1,2,3,4,5,6,7,8].map(dex =>
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox" class="custom-control-input"
          id={`customCheck${dex+1}`} name={dex}
          onChange={(e) => this.handleCheck(e)}
        />
        <label class="custom-control-label"
          for={`customCheck${dex+1}`}
        >Field {dex+1}</label>
      </div>
    )
  }

  handleCheck = (e) => {
    // e.target.checked === false
    const box = document.getElementById(`input${e.target.name}`)
    box.disabled = !box.disabled
    const toggle = () => {
      if (this.state.active_array[e.target.name] === 0) {
        return (parseInt(e.target.name)+1)
      } else {
        return 0
      }
    }
    const lead = this.state.active_array.slice(0, e.target.name)
    const lag = this.state.active_array.slice(parseInt(e.target.name)+1)
    this.setState({active_array: [ ...lead, toggle(), ...lag ]})
  }

  render() {
    return (
      <div>
        {/* <div className="spacer-5"></div>
        <div className="spacer-5"></div> */}
        <div className="element-screen">
          <h3>Element Text</h3>
          <form onChange={e => this.setState({[e.target.name]: e.target.value})} onSubmit={e => this.handleSubmit(e)}>
            <input type="text" className="single-entry" id="input0" name="icon1" value={this.state.icon1} />
            <input type="text" className="short-entry" id="input1" name="label1" value={this.state.label1} />
            <input type="text" className="single-entry" id="input2" name="icon2" value={this.state.icon2} />
            <input type="text" className="short-entry" id="input3" name="label2" value={this.state.label2} />
            <input type="text" className="single-entry" id="input4" name="icon3" value={this.state.icon3} />
            <input type="text" className="short-entry" id="input5" name="label3" value={this.state.label3} />
            <textarea className="long-entry" id="input6" name="text1" value={this.state.text1} />
            <textarea className="long-entry" id="input7" name="text2" value={this.state.text2} />
            <textarea className="long-entry" id="input8" name="text3" value={this.state.text3} />
            <input type="submit" />
          </form>
        </div>
        {/* <div className="spacer-5"></div>
        <div className="spacer-5"></div> */}
        <Element element={{...this.state, active: this.state.active_array.join("")}}/>
        {/* <div className="spacer-5"></div>
        <div className="spacer-5"></div> */}
        <div className="element-screen">

          <h3>Disabled Fields</h3>
          {this.makeCheckboxes()}

        </div>
      </div>
    );
  }

}

// const mapStateToProps = state => {return {user_id: state.user_id}}

const mapDispatchToProps = (dispatch) => {
  return {
    createElement: (element, history) => dispatch(createElement(element, history)),
  }
}

export default connect(null, mapDispatchToProps)(withRouter(ElementScreen))