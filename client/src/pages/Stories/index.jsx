import { Header } from "../../components/Header";
import { StoryCard } from "../../components/StoryCard";
import { Helmet } from "react-helmet";
import "./styles.css";
import { StoryCardsArea } from "../../components/StoryCardsArea";
import { TitleBox } from "../../components/TitleBox";

export const Stories = () => (
  <>
    <Helmet>
      <title>Glossário de LIBRAS | Histórias</title>
    </Helmet>
    <Header />
    <TitleBox
      title="Histórias em LIBRAS"
      subtitle="Melhore a sua comunicação com essas histórias curtas!"
    />
    <div className="historias-conteudo">
      <h2 className="niveis-historias">
        <span>Nível 1</span>
      </h2>
      <div className="cards-historias">
        <StoryCardsArea />
        {/* <StoryCard
            image={"https://i.imgur.com/pPXOWU6.png"}
            title="Jantar em família"
            exp="+10 EXP"
          />
          <StoryCard
            image={"https://i.imgur.com/M3CLWj8.png"}
            title="Ida ao shopping"
            exp="+10 EXP"
          />
          <StoryCard
            image={"https://i.imgur.com/1pgGO0V.png"}
            title="Jantar vegetariano"
            exp="+10 EXP"
          />
          <StoryCard
            image={"https://i.imgur.com/94qWCMm.png"}
            title="Pedindo um táxi"
            exp="+10 EXP"
          /> */}
      </div>
      <h2 className="niveis-historias">
        <span>Nível 2</span>
      </h2>
      <h3>EM BREVE</h3>
    </div>
  </>
);
