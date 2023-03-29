
import './App.css';
import audioNoel from './assets/audios/audio_papainoel01.mp3'
import imgNoel from './assets/imagens/papainoel01gif.gif'
import audioGato from './assets/audios/audio_gato01.mp3'
import imgGato from './assets/imagens/gato01gif.gif'
import audioPiscina from './assets/audios/audio_piscina01.mp3'
import imgPiscina from './assets/imagens/piscina01gif.gif'
import audioCachorro from './assets/audios/audio_cachorro01.mp3'
import imgCachorro from './assets/imagens/cachorro01gif.gif'
import audioLua from './assets/audios/audio_lua01.mp3'
import imgLua from './assets/imagens/lua01gif.gif'
import audioBanana from './assets/audios/audio_banana02.mp3'
import imgBanana from './assets/imagens/banana01gif.gif'
import audioBola from './assets/audios/audio_bola02.mp3'
import imgBola from './assets/imagens/bola01gif.gif'
import audioSapo from './assets/audios/audio_sapo01.mp3'
import imgSapo from './assets/imagens/sapo01gif.gif'
import audioPeixe from './assets/audios/audio_peixinho01.mp3'
import imgPeixe from './assets/imagens/peixe01gif.gif'
import audioCelular from './assets/audios/audio_celular01.mp3'
import imgCelular from './assets/imagens/celular01gif.gif'
import audioPinto from './assets/audios/audio_pintinho01.mp3'
import imgPinto from './assets/imagens/pintinho01gif.gif'
import audioTitio from './assets/audios/audio_titio01.mp3'
import imgTitio from './assets/imagens/titio01.jpeg'

// imports react

import CardButton from './components/CardButton';
import Loading from './components/Loading/Loading';
import { useState, useEffect } from 'react';





function App() {
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    window.addEventListener('load', ()=>{
      setLoading(false)
    })
  }, [])

  setTimeout(()=>{
    setLoading(false)
  }, 4000)


  return (
    <div className="App">
      {loading ? <Loading/> : null}
      <div className='cardsContainerGrid'>
        <CardButton
        audio={audioNoel}
        img={imgNoel}
        />
        <CardButton
        audio={audioGato}
        img={imgGato}
        />
        <CardButton
        audio={audioPiscina}
        img={imgPiscina}
        />
        <CardButton
        audio={audioCachorro}
        img={imgCachorro}
        />
        <CardButton
        audio={audioLua}
        img={imgLua}
        />
        <CardButton
        audio={audioBanana}
        img={imgBanana}
        />
        <CardButton
        audio={audioBola}
        img={imgBola}
        />
        <CardButton
        audio={audioPinto}
        img={imgPinto}
        />
        <CardButton
        audio={audioPeixe}
        img={imgPeixe}
        />
        <CardButton
        audio={audioCelular}
        img={imgCelular}
        />
        <CardButton
        audio={audioTitio}
        img={imgTitio}
        />
        <CardButton
        audio={audioSapo}
        img={imgSapo}
        />
      </div>
    </div>
  );
}

export default App;
