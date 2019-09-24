import React, { useEffect} from 'react'
import WaveSurfer from 'wavesurfer.js'
import SpectrogramPlugin from 'wavesurfer.js/src/plugin/spectrogram.js'
import TimelinePlugin from 'wavesurfer.js/src/plugin/timeline.js'
import './index.css'


const Wav = () => {

    useEffect(() => {
        var wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: 'violet',
            progressColor: 'purple',
            plugins: [
                TimelinePlugin.create({
                    container: "#wave-timeline"
                }),
                SpectrogramPlugin.create({
                    wavesurfer: wavesurfer,
                    container: "#wave-spectrogram",
                    labels: true
                })
            ]
        })

        wavesurfer.on('ready', function () {
            wavesurfer.play();
        });

        setTimeout(() => {
            wavesurfer.load('http://10.88.105.247:8088/sound.wav');
        }, 200)

      return () => {
        
      };
    }, [])

    
    return (
        <div style={{width: '900px', margin: '20px auto'}}>
            <div id="waveform" style={{ position: 'relative' }} ></div>
            <div id="wave-timeline"></div>
            <div id="wave-spectrogram" ></div>
        </div>
    )
} 

export default Wav