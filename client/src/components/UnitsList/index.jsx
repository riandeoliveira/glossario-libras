import courses from "../../data/courses.json";
import { Unity } from "../Unity";

// Renderiza as unidades de acordo com o nome da seção e dificuldade passadas como props
export const UnitsList = ({ sectionName, difficultyLevel }) =>
  courses.map(
    ({ course, units, path }) =>
      course === sectionName &&
      units.map((unity) => (
        <>
          {unity.difficulty === difficultyLevel && (
            <Unity
              name={unity.name}
              difficulty={unity.difficulty}
              path={`/aprender/${path}/${unity.path}`}
              image={unity.image_url}
            />
          )}
        </>
      ))
  );
