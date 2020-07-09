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
        <div className="single-entry">{icon1}</div>
        <div className="short-entry">{label1}</div>
        <div className="single-entry">{icon2}</div>
        <div className="short-entry">{label2}</div>
        <div className="single-entry">{icon3}</div>
        <div className="short-entry">{label3}</div>
        <div className="long-entry">{text1}</div>
        <div className="long-entry">{text2}</div>
        <div className="long-entry">{text3}</div>
      </div>
    );
  }

}

export default Element