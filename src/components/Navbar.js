import React from 'react';
// import logo from './logo.svg';
// import 'bootswatch/dist/cerulean/bootstrap.min.css';
// import './App.css';

class Navbar extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div id="navbarColor03" >
                <ul className="navbar-nav">
                    <li
                        className="list-group-item bg-primary"
                        onMouseEnter={this.props.mouse.mouseEnter}
                        onMouseLeave={this.props.mouse.mouseLeave}
                    >NAV</li>
                    <li
                        className="list-group-item bg-primary"
                        onMouseEnter={this.props.mouse.mouseEnter}
                        onMouseLeave={this.props.mouse.mouseLeave}
                    >sus</li>
                    <li
                        className="list-group-item bg-primary"
                        onMouseEnter={this.props.mouse.mouseEnter}
                        onMouseLeave={this.props.mouse.mouseLeave}
                    >sus</li>
                    <li
                        className="list-group-item bg-primary"
                        onMouseEnter={this.props.mouse.mouseEnter}
                        onMouseLeave={this.props.mouse.mouseLeave}
                    >sus</li>
                    <li
                        className="list-group-item bg-primary"
                        onMouseEnter={this.props.mouse.mouseEnter}
                        onMouseLeave={this.props.mouse.mouseLeave}
                    >sus</li>
                </ul>

            </div>
        </nav>
    );
  }
}

export default Navbar;
