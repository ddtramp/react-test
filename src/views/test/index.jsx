import React, { useState } from 'react';
import { Button, Icon } from '@cyber-insight/cps-ui'
 
import TreeData from '../test/TreeData'
import Pagina from '../test/pagination'
import Menu from '../test/Menu'

const Test = () => {
    const [collapsed, setCollapased] = useState(false)
    const toggleCollapsed = () => {
        setCollapased(!collapsed)
    }

  return (
    <div className="App">

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

    </div>
  )
}

export default Test