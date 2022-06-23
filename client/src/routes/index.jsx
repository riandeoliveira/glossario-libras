import units from "../components/UnitsList/units.json";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Learn } from "../pages/Learn";
import { Stories } from "../pages/Stories";
import { Signs } from "../pages/Signs";
import { Test } from "../pages/Test";

/**
 * @REFATORAR
 *
 * Otimizar isso com métodos de objetos???
 *
 * units.technology
 * units.administration
 * units.pedagogy
 */

// Criar um objeto para cada unidade
// Total: 9 objetos criados dinamicamente

const unitsList = Object.keys(units).map((unity) => unity);

const aaa = unitsList.map((unity) =>
  units[unity].map(({ exercise_path, questions }) => ({
    path: exercise_path,
    page: <Test data={questions} />,
  }))
);

console.log(aaa);

const routes = [
  {
    path: "/",
    page: <Login />,
  },
  {
    path: "/login",
    page: <Login />,
  },
  {
    path: "/cadastro",
    page: <Register />,
  },
  {
    path: "/aprender",
    page: <Learn />,
  },
  {
    path: "/historias",
    page: <Stories />,
  },
  {
    path: "/sinais",
    page: <Signs />,
  },
  {
    path: "/aaa",
    page: "",
  },
];

export default routes;
