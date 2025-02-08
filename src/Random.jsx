import React, { useEffect, useState } from 'react';

const RandomBackground = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  // Arka plan resimlerini bir dizi olarak tanımlayalım
  const images = [
    'https://static.zerochan.net/Hololive.1024.3714395.webp',
    'https://images6.alphacoders.com/125/thumb-1920-1255447.jpg',
    'https://static.zerochan.net/Hololive.1024.3713984.webp',
  ];

  // Sayfa yüklendiğinde rastgele bir arka plan resmi seçelim
  useEffect(() => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setBackgroundImage(randomImage);
  }, []);

  return (
    <div
      style={{
        height: '360px',  // Sayfa yüksekliği
        width: '444px',
        padding: '20px',
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        color: 'white',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',  // Arka planı tam ekran yapmak
        backgroundPosition: 'center',
        transition: 'background 1s ease-in-out',  // Arka plan geçiş efekti
        transform: 'translateX(-488px) translateY(240px)', // Başlangıçta yatay kaydırma
        objectFit: 'cover',
        border: '4px solid #00f2ff',
        marginBottom: '200px',
        borderRadius: '20px',
      }}
    >
    </div>
  );
};

export default RandomBackground;