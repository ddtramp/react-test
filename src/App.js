import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Icon } from '@cyber-insight/cps-ui'
 
import TreeData from './TreeData'
import Pagina from './pagination'
import Menu from './Menu'

import Wav from './wav/index'

const  App = () => {
    const [collapsed, setCollapased] = useState(false)
    const toggleCollapsed = () => {
        setCollapased(!collapsed)
    };

  return (
    <div className="App">

        <Wav />


        <Button type="primary" >
            <Icon type="github" />
            <span>测试</span>
        </Button>


        <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu collapsed={collapsed} setCollapased={setCollapased} />
        
        <TreeData />
        <Pagina />


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
