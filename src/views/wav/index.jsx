import React, { useState } from 'react'
import Wav from './../../components/wav'
import { Select } from '@cyber-insight/cps-ui'
const { Option } = Select 

const URL = '10.88.105.191'
const PORT = '8088'

const WavContainer = () => {
    const [ sound, setSound ] = useState(`http://${URL}:${PORT}/sound.wav`)
    const handleMusicChange = (value) => {
        setSound(value)
    }
    return (
        <div>
            <Select onChange={handleMusicChange} value={sound}>
                <Option value={`http://${URL}:${PORT}/sound.wav`}>默认</Option>
                <Option value={`http://${URL}:${PORT}/yongqi.mp3`}>勇气</Option>
            </Select>
            <Wav 
                style={{width: '900px', height: '600px', margin: '20px auto 100px auto'}}
                url={sound}
            />
        </div>

    )
}

export default WavContainer