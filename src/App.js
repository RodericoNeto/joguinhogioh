
import './App.css';
import audioNoel from './assets/audios/audio_papainoel01.mp3'
import imgNoel from './assets/imagens/papainoel1.jpg'
import audioGato from './assets/audios/audio_gato01.mp3'
import imgGato from './assets/imagens/gato01.png'
import audioPiscina from './assets/audios/audio_piscina01.mp3'
import imgPiscina from './assets/imagens/piscina01.png'
import audioCachorro from './assets/audios/audio_cachorro01.mp3'
import imgCachorro from './assets/imagens/cachorro01.jpg'
import audioLua from './assets/audios/audio_lua01.mp3'
import imgLua from './assets/imagens/lua01gif.gif'
import audioBanana from './assets/audios/audio_banana01.mp3'
import imgBanana from './assets/imagens/banana01.jpg'

import CardButton from './components/CardButton';



function App() {
  return (
    <div className="App">
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
        audio={audioNoel}
        img={imgNoel}
        />
        <CardButton
        audio={audioNoel}
        img={imgNoel}
        />
        <CardButton
        audio={audioNoel}
        img={imgNoel}
        />
                <CardButton
        audio={audioNoel}
        img={imgNoel}
        />
        <CardButton
        audio={audioNoel}
        img={imgNoel}
        />
        <CardButton
        audio={audioNoel}
        img={imgNoel}
        />
      </div>
    </div>
  );
}

export default App;
