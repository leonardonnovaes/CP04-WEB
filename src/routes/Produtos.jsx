import imagem1 from '../assets/bola.png'
import imagem2 from '../assets/bola_basquete.png'
import imagem3 from '../assets/bola_volei.png'
import imagem4 from '../assets/tenis_a.png'
import imagem5 from '../assets/bolsa.png'
import imagem6 from '../assets/camisa_timao.png'

function Produtos() {
  return (
    <div className="produtos">
      <h2>Produtos</h2>
      <div className="produtos-grid">
        <section className="card">
          <img src={imagem1} className="imagem-produtos" />
          <h3>Bola Penalty S11 R2 XXIII</h3>
          <p className="preco">R$ R$ 79,90</p>
        </section>
        <section className="card">
          <img src={imagem2} className="imagem-produtos" />
          <h3>Bola de Basquete Wilson NBA DRV</h3>
          <p className="preco">R$ 119,90</p>
        </section>
        <section className="card">
          <img src={imagem3} className="imagem-produtos" />
          <h3>Bola de Volêi VP5000 Penalty</h3>
          <p className="preco">R$ 169,99</p>
        </section>
        <section className="card">
          <img src={imagem4} className="imagem-produtos" />
          <h3>Tênis ASICS Gel-Contend 8 - Masculino</h3>
          <p className="preco">R$ 259,99</p>
        </section>
        <section className="card">
          <img src={imagem5} className="imagem-produtos" />
          <h3>Bolsa Nike Academy Team Unissex</h3>
          <p className="preco">R$ 322,99</p>
        </section>
        <section className="card">
          <img src={imagem6} className="imagem-produtos" />
          <h3>Camisa Corinthians I 23/24 Torcedor Nike - Branca</h3>
          <p className="preco">R$ 300,00</p>
        </section>


      </div>
    </div>
  );
}

export default Produtos;
