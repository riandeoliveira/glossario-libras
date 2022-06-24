import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";

export const App = () => (
  <BrowserRouter>
    <Routes>
      {routes.map(({ path, page }, i) => (
        <Route exact path={path} element={page} key={i} />
      ))}
    </Routes>
  </BrowserRouter>
);
