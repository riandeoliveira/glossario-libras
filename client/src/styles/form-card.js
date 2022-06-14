/* Estilos compartilhados entre as páginas de formulário Login e Register */

import styled from "styled-components";

export const Card = styled.div`
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px;
  padding: 48px;
  transition: all 0.5s;
  width: 480px;

  h1 {
    font-family: "Alatsi", sans-serif;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  @media screen and (max-width: 420px) {
    padding: 24px;
  }
`;

export const Button = styled.div`
  margin-top: 16px;
`;

export const Question = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  text-align: center;

  a {
    text-decoration: none;

    &:hover {
      color: #156bb7;
      text-decoration: underline;
    }
  }
`;
