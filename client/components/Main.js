import React, { Fragment } from 'react'
import { Navigation, Home, Projects, Photography, Biography } from './Index'

class Main extends React.Component {
    render() {
        return (
            <Fragment>
                <Navigation />
                <Home />
                <Projects />
                <Photography />
                <Biography />
            </Fragment>
        )
    }
}

export default Main