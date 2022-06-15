import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  & > div {
    display: flex;
    width: 1200px;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
  }
`;
