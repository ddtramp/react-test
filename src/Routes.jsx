import React from 'react'
import { hot } from 'react-hot-loader'

import { Route, Switch, withRouter, Redirect } from 'react-router-dom'

import VHome from './views/home/App'
import Test from './views/test'
import VWav from './views/wav'
import VG6 from './views/g6'
import Threejs from './views/threejs'

const Routes = (props) => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={VHome} />
                <Route path="/test" component={Test} />
                <Route path="/wav" component={VWav} />
                <Route path="/g6" component={VG6} />
                <Route path="/threejs" component={Threejs} />
        
                <Redirect to={{ pathname: '/', search: props.location.search }} />
            </Switch>
        </>
    )
}

export default withRouter(hot(module)(Routes))