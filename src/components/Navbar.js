import React from 'react';
// import logo from './logo.svg';
// import 'bootswatch/dist/cerulean/bootstrap.min.css';
// import './App.css';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div id="navbarColor03" >
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        {/* <a class="nav-link" href="welcome">Home <span class="sr-only">(current)</span></a> */}
                        <div className="nav-link"><NavLink to="/welcome">Home</NavLink></div>
                    </li>
                    <li class="nav-item">
                        <div className="nav-link"><NavLink to="/login">Login</NavLink></div>
                    </li>
                    <li class="nav-item">
                        <div className="nav-link"><NavLink to="/settings">Settings</NavLink></div>
                    </li>
                    <li class="nav-item">
                        <div className="nav-link"><NavLink to="/about">About</NavLink></div>
                    </li>
                </ul>
            </div>
        </nav>
    );
  }
}

export default Navbar;
