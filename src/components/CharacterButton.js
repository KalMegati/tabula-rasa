import React from 'react';

class CharacterButton extends React.Component {
  render() {
    return (
        <button
            className="btn btn-secondary"
            onClick={() => console.log(this.props.character.name)}
        >{this.props.character.name}</button>
    );
  }
}

export default CharacterButton;
