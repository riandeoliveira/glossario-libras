import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;

  & > div {
    display: flex;
    border-radius: 10px;
    justify-content: center;
  }
`;
