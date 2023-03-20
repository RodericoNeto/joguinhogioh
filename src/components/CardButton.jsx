import React from 'react'
import './card-button.css'

export default function CardButton(props) {

    function tocarAudio(){
        const audioElement = new Audio(props.audio)
        audioElement.play()
    }
    

  return (
    <div 
    className='cardShape' 
    style={{backgroundImage: `url(${props.img})`}}
    onClick={tocarAudio}
    >
    </div>
  )
}
