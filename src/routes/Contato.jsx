function Contato() {
  return (
    <div className="contato">
      <h2>Contato</h2>
      <div className="contato-form">
        <form action="">
          <div className="formControl1">
            <label htmlFor="">Usuario</label>
            <input type="text" placeholder="Digite seu usuário" className="Caixa1"/>
          </div>
          <div className="formControl1">
            E-mail:
            <input type="email" placeholder="Digite seu e-mail" className="Caixa1"/>
          </div>
          <div className="formControl1">
            Mensagem:
            <textarea placeholder="Digite sua mensagem" className="Caixa2" />
          </div>
          <p>
            <button type="submit">Enviar</button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Contato;
