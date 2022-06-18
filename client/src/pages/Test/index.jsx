import styles from "./styles.module.scss";
import { Helmet } from "react-helmet";
import { ExerciseHeader } from "../../components/ExerciseHeader";

export const Test = () => (
  <>
    <Helmet>
      <title>TESTE</title>
    </Helmet>
    <ExerciseHeader />
  </>
);
