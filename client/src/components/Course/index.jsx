import styles from "./styles.module.scss";
import { SectionTitle } from "../SectionTitle";
import { UnitsBox } from "../UnitsBox";

export const Course = ({ title, name }) => (
  <section className={styles.course}>
    <SectionTitle title={title} />
    <UnitsBox sectionName={name} />
  </section>
);
