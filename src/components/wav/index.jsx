/**
 * 音频频谱图
 * https://wavesurfer-js.org/
 * https://github.com/bpostlethwaite/colormap
 */

import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Button, Select, Spin } from '@cyber-insight/cps-ui'

import WaveSurfer from 'wavesurfer.js'
import SpectrogramPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.spectrogram'
import TimelinePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.timeline'
import CursorPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.cursor'

// import * as timeline from './timeline'
import colormap from 'colormap'
import './index.css'
// import ColorBar from './ColorBar'

const colors = colormap({
    colormap: 'jet',
    nshades: 256,
    format: 'float'
})

// const colorsRgba =  colormap({
//     colormap: 'jet',
//     nshades: 256,
//     format: 'rgb'
// })
const { Option } = Select

const SpingingStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 6,
    width: '100%',
}

const Wav = (props) => {
    const [spinning, setSpinning] = useState(true)
    const [ wavesurfer, setWavesurfer] = useState(null)
    useEffect(() => {

        let spec = SpectrogramPlugin.create({
            container: "#wave-spectrogram",
            // labels: true,
            colorMap: colors,
            fftSamples: 1024,
        })
        let wavesurferInstance = WaveSurfer.create({
            container: '#waveform',
            waveColor: 'violet',
            progressColor: 'purple',
            // height: 409.6,
            mediaControls: true,
            // scrollParent: true,
            plugins: [
                CursorPlugin.create({
                    showTime: true,
                    opacity: 1,
                    customShowTimeStyle: {
                        'background-color': '#000',
                        color: '#fff',
                        padding: '2px',
                        'font-size': '10px'
                    }
                }),
                TimelinePlugin.create({
                    container: "#wave-timeline",
                    // formatTimeCallback: timeline.formatTimeCallback,
                    // timeInterval: timeline.timeInterval,
                    // primaryLabelInterval: timeline.primaryLabelInterval,
                    // secondaryLabelInterval: timeline.secondaryLabelInterval,
                    primaryColor: 'blue',
                    secondaryColor: 'red',
                    primaryFontColor: 'blue',
                    secondaryFontColor: 'red'
                }),
                spec
            ]
        })
        const readyFn = () => {
            setSpinning(false)
        }
        wavesurferInstance.on('ready', readyFn)
        setWavesurfer(wavesurferInstance)
        return () => {
            wavesurferInstance.off('ready', readyFn)
            wavesurferInstance.destroy()
        }
    }, [])

    useEffect(() => {
        wavesurfer && wavesurfer.empty()
        setSpinning(true)
        setTimeout(() => {
            wavesurfer&& wavesurfer.load(props.url);
        }, 0)
    }, [props.url, wavesurfer])

    const [ speed, setSpeed ] = useState(1) 
    const handleSpeedChange = (val) => {
        setSpeed(val)
    }

    const handlePlay = () => {
        wavesurfer.play()
    }

    const handlePause = () => {
        wavesurfer.pause()      
    }

    const handleStop = () => {
        wavesurfer.stop()
    }

    const handleSpeedPlay = (val) => {
        wavesurfer.setPlaybackRate(speed)
        wavesurfer.play()
    }

    const { style, className, url, ...rest } = props // eslint-disable-line
    
    return (
            <div style={style} className={classnames('wavesurfer__component')}>
                <div className="wavesurfer__image__container">
                    <div id="waveform" style={{ position: 'relative' }} ></div>
                    <div id="wave-spectrogram" ></div>
                    <div id="wave-timeline"></div>
                    <Spin spinning={spinning} style={SpingingStyle}/>  
                </div>
                {/* <ColorBar list={colorsRgba}  style={{width: '20px', position: 'absolute', top: 0, right: '-40px'}}/> */}

                <div className="wrapper__buttons">
                    <div>
                        <Button type="primary" onClick={handlePlay} disabled={spinning}>
                            播放
                        </Button>
                        <Button type="primary" onClick={handlePause} disabled={spinning}>
                            暂停
                        </Button>
                        <Button type="primary" onClick={handleStop} disabled={spinning}>
                            停止
                        </Button>
                    </div>
                    <div>
                        <Button type="primary" onClick={handleSpeedPlay} disabled={spinning}>
                            倍速播放
                        </Button>

                        <Select onChange={handleSpeedChange} value={speed} disabled={spinning}>
                            <Option value={0.5} key="1">x0.5</Option>
                            <Option value={1} key="2">x1.0</Option>
                            <Option value={1.5} key="3">x1.5</Option>
                            <Option value={2} key="4">x2.0</Option>
                            <Option value={3} key="4">x3.0</Option>

                        </Select>
                    </div>
                </div>
            </div>
    )
} 
Wav.propTypes = {
    url: PropTypes.string.isRequired
}

export default Wav