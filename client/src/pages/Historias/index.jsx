import Header from '../../components/Header';
import './styles.css';
import CardHistoria from '../../components/CardHistoria';

export default function Historias() {
  return (
    <>
      <Header />
      <div className="historias-conteudo">
        <h1>Histórias em LIBRAS</h1>
        <p>Melhore a sua comunicação com essas histórias curtas!</p>
        <h2 className="niveis-historias">
          <span>Nível 1</span>
        </h2>
        <div className="cards-historias">
          <CardHistoria image={"https://i.imgur.com/pPXOWU6.png"} title="Jantar em família" exp="+10 EXP" />
          <CardHistoria image={"https://i.imgur.com/M3CLWj8.png"} title="Ida ao shopping" exp="+10 EXP" />
          <CardHistoria image={"https://i.imgur.com/1pgGO0V.png"} title="Jantar vegetariano" exp="+10 EXP" />
          <CardHistoria image={"https://i.imgur.com/94qWCMm.png"} title="Pedindo um táxi" exp="+10 EXP" />
        </div>
        <h2 className="niveis-historias">
          <span>Nível 2</span>
        </h2>
        <h3>EM BREVE</h3>
      </div>
    </>
  );
}
