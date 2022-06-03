import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CadastroForm from './CadastroForm/index.jsx';
import CadastroForm2 from './CadastroForm2/index.jsx';
import LoginForm from './LoginForm/index.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/cadastro" element={<CadastroForm />} />
      <Route path="/cadastro2" element={<CadastroForm2 /> } />
    </Routes>
  </BrowserRouter>
);
