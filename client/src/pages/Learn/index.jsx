import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Header } from "../../components/Header/index.jsx";
import styles from "./styles.module.scss";
import { TitleBox } from "../../components/TitleBox/index.jsx";
import courses from "../../data/courses.json";
import { Footer } from "../../components/Footer/index.jsx";
import { Course } from "../../components/Course/index.jsx";

// Página Aprender
export const Learn = () => {
  const { course_name } = useParams();

  return (
    <>
      <Helmet>
        <title>Aprender | Glossário de Libras</title>
      </Helmet>
      <Header />
      <main className={styles.main}>
        <TitleBox
          title="Aprenda Libras"
          subtitle="Conheça a Língua Brasileira de Sinais enquanto joga"
        />
        {courses.map(({ name, course, path }, i) => (
          <>
            {course_name === undefined && (
              <Course title={name} course={course} key={i} />
            )}
            {course_name === path && (
              <Course title={name} course={course} key={i} />
            )}
          </>
        ))}
      </main>
      <Footer />
    </>
  );
};
