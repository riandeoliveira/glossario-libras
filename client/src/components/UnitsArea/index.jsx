import { Unity } from "../Unity";
import units from "./units.json";

export const UnitsArea = ({ sectionName }) => (
  <div>
    {units[sectionName].map(({ difficulty, image_url }) => (
      <Unity difficulty={difficulty} image={image_url} />
    ))}
  </div>
);
