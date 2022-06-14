import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Home from "./pages/Home";
import Historias from "./pages/Historias";
import Sinais from "./pages/Sinais";

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
      <Route path="/aprender" element={<Home />} />
      <Route path="/historias" element={<Historias />} />
      <Route path="/sinais" element={<Sinais />} />
    </Routes>
  </BrowserRouter>
);
