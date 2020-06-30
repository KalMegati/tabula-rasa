import React from 'react';
import Navbar from './Components/Navbar';
import 'bootswatch/dist/cerulean/bootstrap.min.css';
import './App.css';

class App extends React.Component {

  activate = event => {
    event.target.classList.add("white-text")
  }

  deactivate = event => {
    event.target.classList.remove("white-text")
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <ul className="list-group col">
          <li className="list-group-item bg-primary" onMouseEnter={e => this.activate(e)} onMouseLeave={e => this.deactivate(e)} >sus</li>
          <li className="list-group-item bg-primary">joj</li>
        </ul>
      </div>
    );
  }
}

export default App;
