import '../assets/Camiseta.jpg'



const produtos = [
  { id: 1, nome: 'Tênis de Corrida', preco: 'R$ 299,99', imagem: '../assets/Camiseta.jpg' },
  { id: 2, nome: 'Camiseta Esportiva', preco: 'R$ 99,99', imagem: '../assets/Camiseta.jpg' },
  { id: 3, nome: 'Bola de Futebol', preco: 'R$ 59,99', imagem: '../assets/Camiseta.jpg' },
  { id: 3, nome: 'Bola de Futebol', preco: 'R$ 59,99', imagem: '../assets/Camiseta.jpg' },
  { id: 3, nome: 'Bola de Futebol', preco: 'R$ 59,99', imagem: '../assets/Camiseta.jpg' },
  { id: 3, nome: 'Bola de Futebol', preco: 'R$ 59,99', imagem: '../assets/Camiseta.jpg' },
];

function Produtos() {
  return (
    <div className="produtos">
      <h2>Produtos</h2>
      <div className="produtos-grid">
        {produtos.map((produtos) => (
          <div key={produtos.id} className="card">
            <img src={produtos.imagem} alt={produtos.nome} />
            <h3>{produtos.nome}</h3>
            <p>{produtos.preco}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produtos;
