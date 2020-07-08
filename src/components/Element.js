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
        <div>JOJ</div>
      );
    }

}

export default Element