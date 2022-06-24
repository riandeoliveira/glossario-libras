import { Helmet } from "react-helmet";
import { Header } from "../../components/Header";
import styles from "./styles.module.scss";
import { TitleBox } from "../../components/TitleBox";
import { SectionTitle } from "../../components/SectionTitle";
import signs from "../../data/signs.json";
import { SignCard } from "../../components/SignCard";

// Página de Sinais
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
        <div className={styles.container}>
          <div className={styles.cards_container}>
            {signs.map(({ letter, image_url }, i) => (
              <SignCard title={letter} image={image_url} key={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  </>
);
