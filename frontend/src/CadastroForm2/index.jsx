import React from 'react';
import './styles.css';

export default function CadastroForm2() {
  return (
    <div className="formulario-login">
      <form>
        <div className="mb-3">
          <label>Você é uma pessoa com deficiência auditiva ou surda?</label>
          <input type="radio" value="sim" />
          <label for="sim">Sim</label>
          <input type="radio" value="nao" checked={true} />
          <label for="nao">Não</label>
        </div>
        <div className="mb-3">
          <label>
            Está cursando alguma graduação atualmente? Se sim, qual?
          </label>
          <select
            class="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option selected>Selecione a sua graduação</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Está familiarizado com o glossário de LIBRAS?</label>
          <input type="radio" value="sim" />
          <label for="sim">Sim</label>
          <input type="radio" value="nao" checked={true} />
          <label for="nao">Não</label>
        </div>
        <div className="mb-3">
          <label for="customRange2">
            Se sim, qual seu nível de conhecimento?
          </label>
          <input
            type="range"
            class="form-range"
            min="1"
            max="5"
            id="customRange2"
          />
        </div>
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label class="form-check-label" for="flexCheckChecked">
          Concordo com os termos
        </label>
        <button type="submit" className="btn btn-primary next-button">
          Finalizar cadastro
        </button>
      </form>
    </div>
  );
}
