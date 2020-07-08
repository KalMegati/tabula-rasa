import React from 'react';
import { connect } from 'react-redux';

class ElementScreen extends React.Component {

    render() {
      return (
        <div>
            <div className="spacer-5"></div>
            <div className="spacer-5"></div>
            <div className="element-screen">
              <form>
                <input type="text" className="single-entry"></input>
                <input type="text" className="short-entry"></input>
                <textarea className="long-entry"></textarea>
              </form>
            </div>
            <div className="spacer-5"></div>
            <div className="spacer-5"></div>
            <div className="element-screen">Kiryu</div>
        </div>
      );
    }

}

export default ElementScreen