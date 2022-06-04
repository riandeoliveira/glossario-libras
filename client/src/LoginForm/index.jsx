import React, { Component } from 'react';
import './styles.css';

export default function LoginForm() {
    return (
      <div className="formulario-login">
        <form>
          <h3 className="titulo">Glossário de LIBRAS</h3>
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
          <button type="submit" className="btn btn-primary submit-form">
            Entrar
          </button>
          <button type="submit" className="btn btn-primary">
            Cadastrar-se
          </button>
        </form>
      </div>
    );
  }
