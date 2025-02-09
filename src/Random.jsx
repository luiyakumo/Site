import React, { useEffect, useState } from 'react';

const RandomBackground = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  // Arka plan resimlerini bir dizi olarak tanımlayalım
  const images = [
    'src/assets/H1.webp',
    'src/assets/H2.jpg',
    'src/assets/H3.webp',
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