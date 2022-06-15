import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    text-align: center;
    width: 1200px;
  }

  h1,
  p {
    margin: 0;
  }
`;
