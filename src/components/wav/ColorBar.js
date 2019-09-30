import React from 'react'

const ColorBar = (props) => {
    const { style, list } = props
    return (
        <div style={style}>
            {
                list.map(item => {
                return (
                    <div style={{
                        height: '1px',
                        backgroundColor: `rgba(${item.join(',')})`,
                    }}></div>
                )
            })
            }
        </div>
    )
}

export default ColorBar