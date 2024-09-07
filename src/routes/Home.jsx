import React, { useState, useEffect } from 'react';
import Camiseta from '../assets/Camiseta.jpg';
import Casaco from '../assets/Casaco.webp';
import Tenis from '../assets/Tenis.jpg';
import FutebolDeCego from '../assets/Futebol-de-cego.webp'
import BasqueteRodas from '../assets/Basquete-Rodas.jpg'
import Nike from '../assets/nike.png'
import CortaVento from '../assets/corta-vento.png'
import Touca from '../assets/touca.png'
import Adidas from '../assets/adidas.png'
import CamisetaSeleção from '../assets/camisetaSeleção.png'


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
        <p>Principais produtos</p>
    </div>
    <div className='ProdutosHome'>
        <div className='ProdutoHomeCard'><img src={Nike}/>    <p>Tenis Nike</p></div>
        <div className='ProdutoHomeCard'><img src={CortaVento}/><p>Corta Vento Nike</p></div>
        <div className='ProdutoHomeCard'><img src={Touca}/><p>Touca Nike</p></div>
        <div className='ProdutoHomeCard'><img src={Adidas}/><p>Tenis Adidas</p></div>
        <div className='ProdutoHomeCard'><img src={CamisetaSeleção}/><p>Camiseta Seleção Brasileira</p></div>
    </div>
    <div className='home'><p>Principais Projetos</p></div>


    <div className='Projetos'>
      
      <div className='Projeto1'>
        <p>Futebol para todos </p>
        <img src={FutebolDeCego} alt="" />
      </div>
      <div className='Projeto1'>
      <p>Basquete para todos </p>
      <img src={BasqueteRodas} alt="" />
      </div>
      
    </div>
  </> 
  );
}

export default Home;
