import React from 'react';
// import logo from './logo.svg';
// import 'bootswatch/dist/cerulean/bootstrap.min.css';
// import './App.css';

class Navbar extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div id="navbarColor03" >
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                </ul>

            </div>
        </nav>
    );
  }
}

export default Navbar;
