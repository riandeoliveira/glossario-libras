import { Header } from "../../components/Header";
import { Helmet } from "react-helmet";
import { SignCardsArea } from "../../components/SignCardsArea";
import "./styles.css";
import { TitleBox } from "../../components/TitleBox";

export const Signs = () => (
  <>
    <Helmet>
      <title>Glossário de LIBRAS | Sinais</title>
    </Helmet>
    <Header />
    <TitleBox
      title="Vamos aprender os sinais de LIBRAS"
      subtitle="Aprenda os sinais mais usados na Língua Brasileira de Sinais"
    />
    <h2 className="niveis-historias">
      <span>Alfabeto</span>
    </h2>
    <div className="conteudo-sinais">
      <SignCardsArea />
      {/* <SignCard title="A" image={"https://i.imgur.com/Ml2muS3.png"} /> */}
      {/* <SignCard title="B" image={"https://i.imgur.com/ytosRaF.png"} /> */}
      {/* <SignCard title="C" image={"https://i.imgur.com/UJKrNBu.png"} /> */}
      {/* <SignCard title="D" image={"https://i.imgur.com/S5VqB9O.png"} /> */}
      {/* <SignCard title="E" image={"https://i.imgur.com/URGtnHD.png"} /> */}
      {/* <SignCard title="F" image={"https://i.imgur.com/ZjSQd20.png"} /> */}
      {/* <SignCard title="G" image={"https://i.imgur.com/0nTVQ4k.png"} /> */}
      {/* <SignCard title="H" image={"https://i.imgur.com/hJL2nhd.png"} /> */}
      {/* <SignCard title="I" image={"https://i.imgur.com/na3XSqM.png"} /> */}
      {/* <SignCard title="J" image={"https://i.imgur.com/EtVjcCJ.png"} /> */}
      {/* <SignCard title="K" image={"https://i.imgur.com/5AIUrL5.png"} /> */}
      {/* <SignCard title="L" image={"https://i.imgur.com/e7Qzx40.png"} /> */}
      {/* <SignCard title="M" image={"https://i.imgur.com/IEFBPCG.png"} /> */}
      {/* <SignCard title="N" image={"https://i.imgur.com/V1UKMob.png"} /> */}
      {/* <SignCard title="O" image={"https://i.imgur.com/SfTuMZu.png"} /> */}
      {/* <SignCard title="P" image={"https://i.imgur.com/ZBN96SH.png"} /> */}
      {/* <SignCard title="Q" image={"https://i.imgur.com/DRBx1ad.png"} /> */}
      {/* <SignCard title="R" image={"https://i.imgur.com/qglXcCf.png"} /> */}
      {/* <SignCard title="S" image={"https://i.imgur.com/Ic4k40y.png"} /> */}
      {/* <SignCard title="T" image={"https://i.imgur.com/Boms1iH.png"} /> */}
      {/* <SignCard title="U" image={"https://i.imgur.com/4RDyr0x.png"} /> */}
      {/* <SignCard title="V" image={"https://i.imgur.com/rx7siO9.png"} /> */}
      {/* <SignCard title="W" image={"https://i.imgur.com/H5PWEX6.png"} /> */}
      {/* <SignCard title="X" image={"https://i.imgur.com/UeAq31H.png"} /> */}
      {/* <SignCard title="Y" image={"https://i.imgur.com/7cqyElt.png"} /> */}
      {/* <SignCard title="Z" image={"https://i.imgur.com/KvIqgxZ.png"} /> */}
    </div>
  </>
);
