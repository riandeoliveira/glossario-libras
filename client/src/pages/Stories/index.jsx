import { Header } from "../../components/Header";
import { Helmet } from "react-helmet";
import { StoryCardsArea } from "../../components/StoryCardsArea";
import { TitleBox } from "../../components/TitleBox";
import { SectionTitle } from "../../components/SectionTitle";
import styles from "./styles.module.scss";

export const Stories = () => (
  <>
    <Helmet>
      <title>Histórias | Glossário de LIBRAS</title>
    </Helmet>
    <Header />
    <main className={styles.main}>
      <TitleBox
        title="Histórias em LIBRAS"
        subtitle="Melhore a sua comunicação com essas histórias curtas!"
      />
      <section className={styles.section}>
        <SectionTitle title="Nível 1" />
        <StoryCardsArea />
      </section>
      <section className={styles.section}>
        <SectionTitle title="Nível 2" />
      </section>
    </main>
  </>
);
