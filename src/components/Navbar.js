// displays MainScreen navigation options and current User

import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {

    userDisplay = () => {
        if (!!this.props.user_id) {
            return this.props.user_id
        } else {
            return "guest"
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand bg-dark">
                <div id="navbarColor03" >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <div className="nav-link"><NavLink to="/welcome">Home</NavLink></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link"><NavLink to="/login">Login</NavLink></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link"><NavLink to="/settings">Settings</NavLink></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link"><NavLink to="/about">About</NavLink></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link"><NavLink to="/">{this.userDisplay()}</NavLink></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link"><NavLink to="/newsheet">New Sheet</NavLink></div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => {
    return {user_id: state.user_id}
}

export default connect(mapStateToProps)(Navbar);
