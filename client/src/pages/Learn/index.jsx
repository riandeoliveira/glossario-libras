import { Header } from "../../components/Header/index.jsx";
import { Helmet } from "react-helmet";
import { TitleBox } from "../../components/TitleBox/index.jsx";
import styles from "./styles.module.scss";
import { SectionTitle } from "../../components/SectionTitle/index.jsx";
import { UnitsArea } from "../../components/UnitsArea/index.jsx";
import { Unity } from "../../components/Unity";

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
        {/* <UnitsArea sectionName="technology" /> */}
        <div className={styles.container}>
          <div className={styles.easy_container}>
            <Unity difficulty="easy" image="https://i.imgur.com/1nPAHF4.png" />
          </div>
          <div className={styles.medium_hard_container}>
            <Unity
              difficulty="medium"
              image="https://i.imgur.com/1nPAHF4.png"
            />
            <Unity difficulty="hard" image="https://i.imgur.com/1nPAHF4.png" />
          </div>
        </div>
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
