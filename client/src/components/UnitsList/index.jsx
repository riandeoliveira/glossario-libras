import units from "../../data/units.json";
import { Unity } from "../Unity";

// Renderiza as unidades de acordo com o nome da seção e dificuldade passadas como props
export const UnitsList = ({ sectionName, difficultyLevel }) =>
  units[sectionName].map(
    ({ name, difficulty, exercise_path, image_url }, i) =>
      difficulty === difficultyLevel && (
        <Unity
          name={name}
          difficulty={difficulty}
          path={exercise_path}
          image={image_url}
          key={i}
        />
      )
  );
