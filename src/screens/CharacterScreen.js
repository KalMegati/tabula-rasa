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

  shouldComponentUpdate(nextProps) {
    return (this.props.character.id != nextProps.match.params.characterId)
  }

  // character = () => {
  //   const id = parseInt(this.props.match.params.characterId)
  //   return this.props.characters.find(
  //     character => character.id === id
  //   )
  // }

  makeElements = () => {
    return this.props.character.elements.map(element => <Element element={element} />)
  }

  loadingBuffer = () => {
    // if (this.props.character.id) {
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
    // } else {
    //   return <h1>LOADING</h1>
    // }
  }

  render() {
    console.log(this.props.match.params.characterId)
    console.log(this.props.character.id)
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