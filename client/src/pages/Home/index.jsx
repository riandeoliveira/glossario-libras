import Header from '../../components/Header/index.jsx';
import Ranking from '../../components/Ranking/index.jsx';
import TodasUnidades from '../../components/TodasUnidades/index.jsx';
import UnidadeLiteratura from '../../components/UnidadeLiteratura/index.jsx';
import UnidadeTecnologia from '../../components/UnidadeTecnologia/index.jsx';
import './styles.css';

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <TodasUnidades />
        {/* <Ranking /> */}
      </div>
    </>
  );
}
