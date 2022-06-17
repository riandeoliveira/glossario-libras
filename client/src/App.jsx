import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Learn } from "./pages/Learn";
import { Stories } from "./pages/Stories";
import { Signs } from "./pages/Signs";

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/cadastro"
        element={
          <Layout>
            <Register />
          </Layout>
        }
      />
      <Route path="/aprender" element={<Learn />} />
      <Route path="/historias" element={<Stories />} />
      <Route path="/sinais" element={<Signs />} />
    </Routes>
  </BrowserRouter>
);
