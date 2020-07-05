import React, { Suspense } from 'react'
// import Cerulean from './Cerulean'
// import Journal from './Journal'
// import Slate from './Slate'
import App from '../App'
import '../App.css';
import { connect } from 'react-redux';

const Cerulean = React.lazy(() => import('./Cerulean'))
const Journal = React.lazy(() => import('./Journal'))
const Slate = React.lazy(() => import('./Slate'))

class StyleSelector extends React.Component {

    // cerulean = React.lazy(() => import('./Cerulean'))
    // journal = React.lazy(() => import('./Journal'))
    // slate = React.lazy(() => import('./Slate'))

    styleSelect(style) {
        switch(style) {
            case 'cerulean':
                return <Cerulean />
            case 'journal':
                return <Journal />
            case 'slate':
                return <Slate />
        }
    }

    render() {
        return <Suspense fallback={<div>Loading...</div>}>
            {this.styleSelect(this.props.style)}
        </Suspense>
    }

}

const mapStateToProps = state => state

export default connect(mapStateToProps)(StyleSelector);