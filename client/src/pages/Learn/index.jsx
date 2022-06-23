import { Header } from "../../components/Header/index.jsx";
import { Helmet } from "react-helmet";
import { TitleBox } from "../../components/TitleBox/index.jsx";
import styles from "./styles.module.scss";
import { SectionTitle } from "../../components/SectionTitle/index.jsx";
import { UnitsBox } from "../../components/UnitsBox/index.jsx";

export const Learn = () => (
  <>
    <Helmet>
      <title>Aprender | Glossário de LIBRAS</title>
    </Helmet>
    <Header />
    <main className={styles.main}>
      <TitleBox
        title="Aprenda LIBRAS"
        subtitle="Conheça a Língua Brasileira de Sinais enquanto joga"
      />
      <section className={styles.section}>
        <SectionTitle title="Tecnologia" />
        <UnitsBox sectionName="technology" />
      </section>
      <section className={styles.section}>
        <SectionTitle title="Administração" />
        <UnitsBox sectionName="administration" />
      </section>
      <section className={styles.section}>
        <SectionTitle title="Pedagogia" />
        <UnitsBox sectionName="pedagogy" />
      </section>
    </main>
  </>
);
