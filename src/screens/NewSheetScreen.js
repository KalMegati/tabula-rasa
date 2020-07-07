import React from 'react';
import { connect } from 'react-redux';
// import { createUser, loginUser, logoutUser } from '../actions/actions'

class NewSheetScreen extends React.Component {

  state = {
    name: "",
    blurb: ""
  }

  render() {
    return (
      <div>

        A new warrior has entered the fray!

      </div>
    );
  }

}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createUser: (user) => dispatch(createUser(user)),
//     loginUser: (user) => dispatch(loginUser(user)),
//     logoutUser: () => dispatch(logoutUser())
//   }
// }

// export default connect(null, mapDispatchToProps)(NewCharacterScreen)

export default NewSheetScreen