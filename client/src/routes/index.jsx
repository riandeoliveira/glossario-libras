import units from "../data/units.json";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Learn } from "../pages/Learn";
import { Stories } from "../pages/Stories";
import { Signs } from "../pages/Signs";
import { QuestionProvider } from "../contexts/QuestionContext";
import { Exercise } from "../pages/Exercise";

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
];

// Transforma os cursos em um array de strings:
const courseList = Object.keys(units).map((unity) => unity);

// Usa a string como argumento e navega em cada curso, obtendo os dados necessários para a criação de uma rota dinâmica:
courseList.map((course) => {
  units[course].map(({ exercise_path, questions }) => {
    // Cria um objeto dinamicamente contendo os dados obtidos:
    const newRoute = {
      path: exercise_path,
      page: (
        <QuestionProvider>
          <Exercise data={questions} />
        </QuestionProvider>
      ),
    };

    // Adiciona o objeto no array de rotas:
    routes.push(newRoute);
  });
});

export default routes;
