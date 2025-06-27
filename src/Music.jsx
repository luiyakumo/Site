import React, { useEffect, useRef, useState } from 'react';
import backgroundMusic from './assets/cobalt.ogg';

function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Otomatik başlatma için
    audioRef.current.play().catch(error => {
      // Tarayıcı politikaları gereği otomatik oynatma engellenebilir
      console.log("Otomatik oynatma engellendi:", error);
    });
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src={backgroundMusic} type="audio/mpeg" />
        Tarayıcınız audio elementini desteklemiyor.
      </audio>
      <button 
        onClick={togglePlay}
        style={{
          position: 'absolute',        /* fixed yerine absolute */
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          background: 'rgba(160, 0, 253, 0.266)',
          color: '#00f2ff',
          border: '1px solid #00f2ff',
          borderRadius: '20px',
          padding: '10px 20px',
          cursor: 'pointer'
        }}
      >
        {isPlaying ? 'Pause' : 'Play'} Music
      </button>
    </div>
  );
}

export default BackgroundMusic;