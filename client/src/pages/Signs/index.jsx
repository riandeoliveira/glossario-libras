import { Header } from "../../components/Header";
import { Helmet } from "react-helmet";
import { SignCardsArea } from "../../components/SignCardsArea";
import { TitleBox } from "../../components/TitleBox";
import { SectionTitle } from "../../components/SectionTitle";
import * as S from "./styles";

export const Signs = () => (
  <>
    <Helmet>
      <title>Glossário de LIBRAS | Sinais</title>
    </Helmet>
    <Header />
    <S.Main>
      <TitleBox
        title="Vamos aprender os sinais de LIBRAS"
        subtitle="Aprenda os sinais mais usados na Língua Brasileira de Sinais"
      />
      <section>
        <SectionTitle title="Alfabeto" />
        <SignCardsArea />
      </section>
    </S.Main>
  </>
);
