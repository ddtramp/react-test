import React, { useState } from 'react'
import Wav from './../../components/wav'
import { Select } from '@cyber-insight/cps-ui'
const { Option } = Select 
const WavContainer = () => {
    const [ sound, setSound ] = useState('http://10.88.105.247:8088/sound.wav')
    const handleMusicChange = (value) => {
        setSound(value)
    }
    return (
        <div>
            <Select onChange={handleMusicChange} value={sound}>
                <Option value="http://10.88.105.247:8088/sound.wav">默认</Option>
                <Option value="http://10.88.105.247:8088/yongqi.mp3">勇气</Option>
            </Select>
            <Wav 
                style={{width: '900px', height: '600px', margin: '20px auto 100px auto'}}
                url={sound}
            />
        </div>

    )
}

export default WavContainer