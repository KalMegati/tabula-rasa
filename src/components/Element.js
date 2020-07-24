// information box to display Element, modular structure chosen by User

import React from 'react';

class Element extends React.Component {

  renderOrNot = (className, entry, index, legend) => { // removes text box if unneeded
    if (legend[index] === "0") {
      return null
    } else {
      return (<div className={className}>
        {entry}
      </div>)
    }
  }

  renderOrBox = (entry1, entry2, index1, index2, legend) => { // removes icon-label row if unneeded
    if (legend[index1] === "0" && legend[index2] === "0") {
      return null
    } else {
      return (<div className="card-header">
        {this.renderOrNot("single-entry", entry1, index1, legend)}
        {this.renderOrNot("short-entry", entry2, index2, legend)}
      </div>)
    }
  }

  renderOrLine = (index, legend) => { // removes text separation line if unneeded
    if (legend[index] === "0") {
      return null
    } else {
      return <hr />
    }
  }

  render() {

    const {
      icon1, icon2, icon3,
      label1, label2, label3,
      text1, text2, text3,
      active
    } = this.props.element // handed down from CharacterScreen or ElementScreen

    const activity_array = active.split("")

    return (
      <div className="element-screen">
        <div className="card text-white bg-primary mb-3">
          {this.renderOrBox(icon1, label1, 0, 1, activity_array)}
          {this.renderOrBox(icon2, label2, 2, 3, activity_array)}
          {this.renderOrBox(icon3, label3, 4, 5, activity_array)}
          {this.renderOrNot("long-entry card-body", text1, 6, activity_array)}
          {this.renderOrLine(7, activity_array)}
          {this.renderOrNot("long-entry card-body", text2, 7, activity_array)}
          {this.renderOrLine(8, activity_array)}
          {this.renderOrNot("long-entry card-body", text3, 8, activity_array)}
        </div>
      </div>

    );
  }

}

export default Element