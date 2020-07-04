// Creates the Button that the User clicks
// to display a user's characters

import React from 'react';
import { connect } from 'react-redux';

class UserButton extends React.Component {

    render() {
        return (
            <button
                type="button"
                className="btn btn-primary btn-sm btn-block"
                onClick={() => this.props.activate(this.props.user.handle)}
            >{this.props.user.handle}</button>
        );
    }

}

export default UserButton