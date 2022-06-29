import styles from "./styles.module.scss";
import { SectionTitle } from "../SectionTitle";
import { UnitsBox } from "../UnitsBox";

export const Course = ({ title, course }) => (
  <section className={styles.course}>
    <SectionTitle title={title} />
    <UnitsBox sectionName={course} />
  </section>
);
