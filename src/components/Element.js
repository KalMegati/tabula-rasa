import React from 'react';
import { connect } from 'react-redux';

class Element extends React.Component {

  render() {

    const  {
      icon1, icon2, icon3,
      label1, label2, label3,
      text1, text2, text3
    } = this.props.element

    return (

      <div className="element-screen">
        <div className="card text-white bg-primary mb-3">
          <div className="card-header">
            <div className="single-entry">{icon1}</div>
            <div className="short-entry">{label1}</div>
          </div>
          <div className="card-header">
            <div className="single-entry">{icon2}</div>
            <div className="short-entry">{label2}</div>
          </div>
          <div className="card-header">
            <div className="single-entry">{icon3}</div>
            <div className="short-entry">{label3}</div>
          </div>
          <div className="long-entry card-body">{text1}</div>
          <div className="long-entry card-body">{text2}</div>
          <div className="long-entry card-body">{text3}</div>
          {/* <div class="card-header">Header</div>
          <div class="card-body">
            <h4 class="card-title">Primary card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div> */}
        </div>
      </div>

    );
  }

}

export default Element