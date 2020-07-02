import React from 'react';
import Navbar from './components/Navbar';
import 'bootswatch/dist/cerulean/bootstrap.min.css';
import './App.css';
import { connect } from 'react-redux';
import { fetchUsers } from './actions/actions'

class App extends React.Component {

  // activate = event => {
  //   event.target.classList.add("white-text")
  // }

  // deactivate = event => {
  //   event.target.classList.remove("white-text")
  // }

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Navbar mouse={this.props} />
        <ul className="list-group col">
          <li className="list-group-item bg-primary" onMouseEnter={this.props.mouseEnter} onMouseLeave={this.props.mouseLeave} >sus</li>
          <li className="list-group-item bg-primary" onMouseEnter={this.props.mouseEnter} onMouseLeave={this.props.mouseLeave} >joj</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
