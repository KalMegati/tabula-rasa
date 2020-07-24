// displays Character sheet with name, blurb, and Elements

import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Element from '../components/Element';
import { fetchCharacter } from '../actions/actions'

class CharacterScreen extends React.Component {

  componentDidMount() {
    const id = parseInt(this.props.match.params.characterId)
    this.props.fetchCharacter(id)
  }

  componentDidUpdate() {
    const id = parseInt(this.props.match.params.characterId)
    this.props.fetchCharacter(id)
  }

  shouldComponentUpdate(nextProps) { // nextProps handed down by routerProps
    return ((this.props.character.id != nextProps.match.params.characterId) || (this.props.character.entities != nextProps.character.entities))
  }

  makeElements = () => {
    return this.props.character.elements.map(element => <Element element={element} />)
  }

  loadingBuffer = () => {
      return (<div>
        <h1>{this.props.character.name}</h1>
        <br />
        {this.makeElements()}
        <br />
        <NavLink to={`/elementedit/${this.props.character.id}`}>
          <button type="button"
            className="btn btn-outline-secondary"
          >New Element</button>
        </NavLink>
      </div>)
  }

  render() {
    return (
      this.loadingBuffer()
    );
  }

}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCharacter: (characterId) => dispatch(fetchCharacter(characterId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterScreen)