import React, { useState } from 'react';
import Steam from './assets/Steam.png';
const images = [
      Steam
    ];

function PageContent() {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage1 = () => setCurrentPage(1);
  const goToPage2 = () => setCurrentPage(2);
  const goToPage3 = () => setCurrentPage(3);
  return (
    <div>
      {/* Sayfalar arasında geçiş yapmak için butonlar */}
      <button
        style={{ marginRight: '10px', background: 'rgba(160, 0, 253, 0.266)' , transform: 'translateX(-426px) translateY(748px)',zIndex: 1,position: 'relative',borderRadius: '20px' , height: '40px',width: '40px',padding: '3px'}}
        onClick={goToPage1}
      >
        1
      </button>
      <button
        style={{ marginRight: '8px', background: 'rgba(160, 0, 253, 0.266)',transform: 'translateX(-424px) translateY(748px)',zIndex: 1, position: 'relative',borderRadius: '20px',height: '40px',width: '40px',padding: '3px'}}
        onClick={goToPage2}
      >
        2
      </button>

      <button
        style={{ marginRight: '8px', background: 'rgba(160, 0, 253, 0.266)',transform: 'translateX(-424px) translateY(748px)',zIndex: 1, position: 'relative',borderRadius: '20px',height: '40px',width: '40px',padding: '3px'}}
        onClick={goToPage3}
      >
        3
      </button>

      {/* Sayfa içeriği, yer değiştirme ve arka plan ekleniyor */}
      <div
        className="page-content"
        style={{
          transition: 'opacity 2s ease', // Fade efekti süresi 2 saniye
          opacity: currentPage === 1 ? 1 : 0, // Sayfa 1 görünür, diğer sayfa kaybolur
          pointerEvents: currentPage === 1 ? 'auto' : 'none',
          position: 'relative', // Sayfa içeriği konumlandırılıyor
          top: '314px', // İçeriği yukarıya kaydırma
          left: '-150px', // İçeriği sola kaydırma
          background: 'rgba(98, 41, 131, 0.34)', // Arka plan rengi
          padding: '20px', // İçeriğe padding ekleniyor
          borderRadius: '10px', // Köşeleri yuvarlatma
          transform: 'translateX(-300px) translateY(370px)',
          width: '400px',
          height: '680px',
        }}
      >
        {currentPage === 1 && (
          <div>
            <h2 style={{paddingTop: '34px',marginLeft: '4px', color: '#00f2ff'}}>Bleh 1</h2>
            <a href="https://steamcommunity.com/id/yukariyuka/" target="_blank" rel="noopener noreferrer"
  className="steam-button"
  style={{
    position: 'absolute',
    top: '644px', // marginTop 490px + container padding/top hesaplanarak ayarlanmalı
    left: '18px', // marginLeft gibi
    zIndex: 9999,
    cursor: 'pointer'
  }}
>
  <img
  
    src={Steam}
    alt="Steam Logo"
    style={{
      width: '60px',
      height: '60px',
      display: 'block',
    }}
  />
  
</a>

          </div>
        )}
      </div>

      <div
        className="page-content"
        style={{
          transition: 'opacity 2s ease', // Fade efekti süresi 2 saniye
          opacity: currentPage === 2 ? 1 : 0, // Sayfa 2 görünür, diğer sayfa kaybolur
          pointerEvents: currentPage === 2 ? 'auto' : 'none',
          position: 'relative', // Sayfa içeriği konumlandırılıyor
          top: '396px', // İçeriği yukarıya kaydırma
          left: '-150px', // İçeriği sola kaydırma
          background: 'rgba(40, 124, 92, 0.2)', // Arka plan rengi
          padding: '20px', // İçeriğe padding ekleniyor
          borderRadius: '10px', // Köşeleri yuvarlatma
          transform: 'translateX(-300px) translateY(-430px)',
          height: '680px',
        }}
      >
        {currentPage === 2 && (
          <div>
            <h2 style={{paddingTop: '32px',marginLeft: '4px',color: 'rgb(203, 126, 255)'}}>Bleh 2</h2>
            <p style={{marginTop: '-20px',marginLeft: '6px',color:'rgb(201, 121, 255)'}}>Random2.</p>
          </div>
        )}
      </div>
      <div
        className="page-content"
        style={{
          transition: 'opacity 2s ease', // Fade efekti süresi 2 saniye
          opacity: currentPage === 3 ? 1 : 0, // Sayfa 1 görünür, diğer sayfa kaybolur
          pointerEvents: currentPage === 3 ? 'auto' : 'none',
          position: 'relative', // Sayfa içeriği konumlandırılıyor
          top: '-764px', // İçeriği yukarıya kaydırma
          left: '-420px', // İçeriği sola kaydırma
          background: 'rgba(98, 41, 131, 0.34)', // Arka plan rengi
          padding: '20px', // İçeriğe padding ekleniyor
          borderRadius: '10px', // Köşeleri yuvarlatma
          transform: 'translateX(-30px) translateY(10px)',
          width: '400px',
          height: '680px',
        }}
      >
        {currentPage === 3 && (
          <div>
            <h2 style={{paddingTop: '32px',marginLeft: '4px', color: '#00f2ff'}}>Bleh 3</h2>
            <p style={{marginTop: '-20px',marginLeft: '6px',color: '#00f2ff'}}>Random3.</p>
          </div>
        )}
      </div>

    </div>
  );
}

export default PageContent;