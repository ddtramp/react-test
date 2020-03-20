import React, { useState } from 'react'

import { TreeSelect, Button, Progress } from '@cyber-insight/cps-ui'
import '@cyber-insight/cps-ui/dist/@cyber-insight/cps-ui.css';

// import './resources/cps/cps-ui'
// import './resources/cps/cps-ui.css'

// import TreeSelect from 'antd/es/tree-select'
// import 'antd/dist/antd.css';

// const SHOW_PARENT = TreeSelect.SHOW_PARENT

const treeData = [
	{
		title: 'Node1',
		value: '0-0',
		key: '0-0',
		children: [
			{
				title: 'Child Node1',
				value: '0-0-0',
				key: '0-0-0',
			},
		],
	},
	{
		title: 'Node2',
		value: '0-1',
		key: '0-1',
		children: [
			{
				title: 'Child Node3',
				value: '0-1-0',
				key: '0-1-0',
			},
			{
				title: 'Child Node4',
				value: '0-1-1',
				key: '0-1-1',
			},
			{
				title: 'Child Node5',
				value: '0-1-2',
				key: '0-1-2',
			},
		],
	},
]

const Demo = () => {
	const [value, setValue] = useState([])

	const onChange = value => {
		console.log('onChange ', value)
		setValue(value)
	}

    const loadData = async (node) => {
        console.log(node)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([])
            }, 100000)
        })
    }

	const tProps = {
		treeData,
		value: value,
        onChange: onChange,
        loadData: loadData,
		treeCheckable: true,
		showCheckedStrategy: TreeSelect.SHOW_PARENT,
		searchPlaceholder: 'Please select',
		style: {
			width: 300,
		},
	}

      return (
        <div>
            <div style={{width: 200, margin: 'aruto auto'}}>
                <Progress percent={100} status="normal"/>
                <Progress percent={50} status="active" />
                <Progress percent={70} status="exception" />
                <Progress percent={100} />
                <Progress percent={50} showInfo={false} />
            </div>

            <TreeSelect {...tProps} />
            
            <Button type="primary"   icon="poweroff" >
             删除
            </Button>
        </div>
        )
}

export default Demo