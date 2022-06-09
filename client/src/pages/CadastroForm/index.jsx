import React from 'react';
import './styles.css';

export default function CadastroForm() {
  return (
    <div className="formulario-login">
      <form>
        <h3 className="titulo">Cadastro</h3>
        <div className="mb-3">
          <label>Nome</label>
          <input
            type="text"
            className="form-control"
            placeholder="Insira o seu nome"
          />
        </div>
        <div className="mb-3">
          <label>E-mail</label>
          <input
            type="email"
            className="form-control"
            placeholder="Insira o seu e-mail"
          />
        </div>
        <div className="mb-3">
          <label>Senha</label>
          <input
            type="password"
            className="form-control"
            placeholder="Insira a sua senha"
          />
        </div>
        <div className="mb-3">
          <label>Confirme a sua senha</label>
          <input
            type="password"
            className="form-control"
            placeholder="Insira a sua senha novamente"
          />
        </div>
        <button type="" className="btn btn-primary next-button">
          Próximo
        </button>
      </form>
    </div>
  );
}
