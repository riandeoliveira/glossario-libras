/**
 * @REFATORAR
 *
 * Separar rotas e otimizar renderizações.
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Learn } from "./pages/Learn";
import { Stories } from "./pages/Stories";
import { Signs } from "./pages/Signs";
import { Test } from "./pages/Test";
import stories from "./pages/Stories/stories.json";
import units from "./components/UnitsList/units.json";
import { QuestionProvider } from "./contexts/QuestionContext";
import routes from "./routes";

export const App = () => (
  <BrowserRouter>
    <Routes>
      {routes.map(({ path, page }, i) => (
        <Route exact path={path} element={page} key={i} />
      ))}

      {/* {stories.map(({ exercise_path }, i) => (
        <Route path={`historias/${exercise_path}`} element={<Test />} key={i} />
      ))}  */}

      {/* {units.technology.map(({ exercise_path, questions }, i) => (
        <Route
          path={exercise_path}
          element={
            <QuestionProvider>
              <Test data={questions} />
            </QuestionProvider>
          }
          key={i}
        />
      ))}
      {units.administration.map(({ exercise_path }, i) => (
        <Route path={exercise_path} element={<Test />} key={i} />
      ))}
      {units.pedagogy.map(({ exercise_path }, i) => (
        <Route path={exercise_path} element={<Test />} key={i} />
      ))} */}
    </Routes>
  </BrowserRouter>
);
