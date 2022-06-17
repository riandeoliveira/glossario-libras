import { Header } from "../../components/Header";
import { Helmet } from "react-helmet";
import { SignCardsArea } from "../../components/SignCardsArea";
import { TitleBox } from "../../components/TitleBox";
import { SectionTitle } from "../../components/SectionTitle";
import styles from "./styles.module.scss";

export const Signs = () => (
  <>
    <Helmet>
      <title>Sinais | Glossário de LIBRAS</title>
    </Helmet>
    <Header />
    <main className={styles.main}>
      <TitleBox
        title="Vamos aprender os sinais de LIBRAS"
        subtitle="Aprenda os sinais mais usados na Língua Brasileira de Sinais"
      />
      <section className={styles.section}>
        <SectionTitle title="Alfabeto" />
        <SignCardsArea />
      </section>
    </main>
  </>
);
