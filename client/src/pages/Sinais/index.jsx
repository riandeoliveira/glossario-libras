import CardSinais from '../../components/CardSinais';
import Header from '../../components/Header';
import { Helmet } from 'react-helmet';
import './styles.css';

export default function Sinais() {
  return (
    <>
    <Helmet>
        <title>Glossário de LIBRAS | Sinais</title>
      </Helmet>
      <Header />
      <div className="historias-conteudo">
        <h1>Vamos aprender os sinais de LIBRAS</h1>
        <p>Aprenda os sinais mais usados na Língua Brasileira de Sinais</p>
      </div>
      <h2 className="niveis-historias">
        <span>Alfabeto</span>
      </h2>
      <div className="conteudo-sinais">
        <CardSinais title="A" image={'https://i.imgur.com/Ml2muS3.png'} />
        <CardSinais title="B" image={'https://i.imgur.com/ytosRaF.png'} />
        <CardSinais title="C" image={'https://i.imgur.com/UJKrNBu.png'} />
        <CardSinais title="D" image={'https://i.imgur.com/S5VqB9O.png'} />
        <CardSinais title="E" image={'https://i.imgur.com/URGtnHD.png'} />
        <CardSinais title="F" image={'https://i.imgur.com/ZjSQd20.png'} />
        <CardSinais title="G" image={'https://i.imgur.com/0nTVQ4k.png'} />
        <CardSinais title="H" image={'https://i.imgur.com/hJL2nhd.png'} />
        <CardSinais title="I" image={'https://i.imgur.com/na3XSqM.png'} />
        <CardSinais title="J" image={'https://i.imgur.com/EtVjcCJ.png'} />
        <CardSinais title="K" image={'https://i.imgur.com/5AIUrL5.png'} />
        <CardSinais title="L" image={'https://i.imgur.com/e7Qzx40.png'} />
        <CardSinais title="M" image={'https://i.imgur.com/IEFBPCG.png'} />
        <CardSinais title="N" image={'https://i.imgur.com/V1UKMob.png'} />
        <CardSinais title="O" image={'https://i.imgur.com/SfTuMZu.png'} />
        <CardSinais title="P" image={'https://i.imgur.com/ZBN96SH.png'} />
        <CardSinais title="Q" image={'https://i.imgur.com/DRBx1ad.png'} />
        <CardSinais title="R" image={'https://i.imgur.com/qglXcCf.png'} />
        <CardSinais title="S" image={'https://i.imgur.com/Ic4k40y.png'} />
        <CardSinais title="T" image={'https://i.imgur.com/Boms1iH.png'} />
        <CardSinais title="U" image={'https://i.imgur.com/4RDyr0x.png'} />
        <CardSinais title="V" image={'https://i.imgur.com/rx7siO9.png'} />
        <CardSinais title="X" image={'https://i.imgur.com/UeAq31H.png'} />
        <CardSinais title="W" image={'https://i.imgur.com/H5PWEX6.png'} />
        <CardSinais title="Y" image={'https://i.imgur.com/7cqyElt.png'} />
        <CardSinais title="Z" image={'https://i.imgur.com/KvIqgxZ.png'} />
      </div>
    </>
  );
}
