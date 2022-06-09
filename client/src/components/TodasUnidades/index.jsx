import UnidadeLiteratura from '../UnidadeLiteratura';
import UnidadePedagogia from '../UnidadePedagogia';
import UnidadeTecnologia from '../UnidadeTecnologia';
import './styles.css';

export default function TodasUnidades() {
  return (
    <>
      <UnidadeTecnologia />
      <UnidadeLiteratura />
      <UnidadePedagogia />
    </>
  );
}
