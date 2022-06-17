import { Header } from "../../components/Header/index.jsx";
import { Helmet } from "react-helmet";
import "./styles.css";
import { TitleBox } from "../../components/TitleBox/index.jsx";
import styles from "./styles.module.scss";
import { SectionTitle } from "../../components/SectionTitle/index.jsx";
import { UnitsArea } from "../../components/UnitsArea/index.jsx";

export const Learn = () => (
  <>
    <Helmet>
      <title>Aprender | Glossário de LIBRAS</title>
    </Helmet>
    <Header />
    <main className={styles.main}>
      <TitleBox title="Título" subtitle="Descrição da página" />
      <section className={styles.section}>
        <SectionTitle title="Tecnologia" />
        <UnitsArea sectionName="technology" />
      </section>
      <section className={styles.section}>
        <SectionTitle title="Literatura" />
        <UnitsArea sectionName="literature" />
      </section>
      <section className={styles.section}>
        <SectionTitle title="Pedagogia" />
        <UnitsArea sectionName="pedagogy" />
      </section>
    </main>
  </>
);
