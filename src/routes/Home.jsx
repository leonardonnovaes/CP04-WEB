import React, { useState, useEffect } from 'react';
import Camiseta from '../assets/Camiseta.jpg';
import Casaco from '../assets/Casaco.webp';
import Tenis from '../assets/Tenis.jpg';


const slidesData = [
  { src: Camiseta, alt: 'Camiseta' },
  { src: Casaco, alt: 'Casaco' },
  { src: Tenis, alt: 'Tênis' },
  
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % slidesData.length);
    }, 9000);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <>
    <section className="Banner">
      {slidesData.map((slide, index) => (
        <img
          key={index}
          src={slide.src}
          alt={slide.alt}
          style={{ display: index === currentSlide ? 'block' : 'none' }}
        />
      ))}
    </section>
    <div className="home">
        <h2>Bem-vindo à Loja de Esportes</h2>
        <p>Aqui você é nosso campeão</p>
        <p> e encontra os melhores produtos esportivos.</p>
    </div>
    <div className='ProdutosHome'>
      <div className='ProdutoHomeCard'><p>Tenis Nike</p></div>
      <div className='ProdutoHomeCard'><p>Corta Vento Nike</p></div>
      <div className='ProdutoHomeCard'><p>Touca Nike</p></div>
      <div className='ProdutoHomeCard'><p>Tenis Adidas</p></div>
      <div className='ProdutoHomeCard'><p>Camiseta Seleção Brasileira</p></div>
    </div>
  </> 
  );
}

export default Home;
