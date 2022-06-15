import { Header } from "../../components/Header";
import { Helmet } from "react-helmet";
import { StoryCardsArea } from "../../components/StoryCardsArea";
import { TitleBox } from "../../components/TitleBox";
import * as S from "./styles";
import { SectionTitle } from "../../components/SectionTitle";

export const Stories = () => (
  <>
    <Helmet>
      <title>Glossário de LIBRAS | Histórias</title>
    </Helmet>
    <Header />
    <S.Main>
      <TitleBox
        title="Histórias em LIBRAS"
        subtitle="Melhore a sua comunicação com essas histórias curtas!"
      />
      <section>
        <SectionTitle title="Nível 1" />
        <StoryCardsArea />
      </section>
    </S.Main>
  </>
);
