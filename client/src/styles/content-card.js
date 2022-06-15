// Estilos compartilhados entre o card de histórias e sinais

import styled from "styled-components";

export const ContentCard = styled.div`
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  padding: 20px;
  text-align: center;
  transition: transform 0.2s;
  align-items: center;
  justify-content: space-between;

  h3 {
    margin: 0;
  }
`;
