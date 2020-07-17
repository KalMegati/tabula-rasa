// Creates the Button that the User clicks
// to display a user's characters

import React from 'react';

const UserButton = (props) =>
    <button
        type="button"
        className="btn btn-primary btn-sm btn-block"
        onClick={() => props.activate(props.user.handle)}
    >{props.user.handle}</button>;

export default UserButton