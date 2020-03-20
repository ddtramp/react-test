import React from 'react';
import './App.scss';

import { Link } from 'react-router-dom'

import { Button } from '@cyber-insight/cps-ui'

const  App = () => {
    return (
        <div className="App">
            <Link to="/test">
                <Button type="primary">测试</Button>
            </Link>

            <Link to="/g6"> 
                <Button type="primary">G6</Button>
            </Link>

            <Link to="/wav"> 
                <Button type="primary">wavesurfer.js</Button>
            </Link>

            <Link to="/threejs"> 
                <Button type="primary">threejs</Button>
            </Link>
        </div>
    )
}

export default App;
