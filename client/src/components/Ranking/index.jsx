import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import './styles.css';

export default function Ranking() {
  return (
    <div className="ranking">
      <div className="box-ranking">
        <h3 className="ranking-titulo">
          <FontAwesomeIcon icon={faTrophy} color={'#FFD700'} /> Ranking dos
          jogadores
        </h3>
        <div className="nomes-coluna">
          <img
            className="foto-usuario"
            src="https://i.imgur.com/gQICA7w.jpg"
          ></img>
          <h4 className="nome-usuario">Bruno Machado</h4>
          <h4 className="exp-usuario">200 EXP</h4>
        </div>
        <div className="nomes-coluna">
          <img
            className="foto-usuario"
            src="https://i.imgur.com/gQICA7w.jpg"
          ></img>
          <h4 className="nome-usuario">Gabriel Espitalher</h4>
          <h4 className="exp-usuario">200 EXP</h4>
        </div>
        <div className="nomes-coluna">
          <img
            className="foto-usuario"
            src="https://i.imgur.com/gQICA7w.jpg"
          ></img>
          <h4 className="nome-usuario">Lucas Stuart</h4>
          <h4 className="exp-usuario">200 EXP</h4>
        </div>
        <div className="nomes-coluna">
          <img
            className="foto-usuario"
            src="https://i.imgur.com/gQICA7w.jpg"
          ></img>
          <h4 className="nome-usuario">Maria Gabriela</h4>
          <h4 className="exp-usuario">200 EXP</h4>
        </div>
        <div className="nomes-coluna">
          <img
            className="foto-usuario"
            src="https://i.imgur.com/gQICA7w.jpg"
          ></img>
          <h4 className="nome-usuario">Rian Oliveira</h4>
          <h4 className="exp-usuario">200 EXP</h4>
        </div>
      </div>
    </div>
  );
}
