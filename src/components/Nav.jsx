import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar">
      <Link to="/"><h1>Loja de Esportes</h1></Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;