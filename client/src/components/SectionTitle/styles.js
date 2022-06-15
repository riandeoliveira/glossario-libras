import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  div {
    width: 1200px;
    display: flex;
    position: relative;
    align-items: center;
    gap: 20px;

    hr {
      height: 2px;
      width: 100%;
    }

    h2 {
      margin: 0;
      background-color: white;
      padding: 8px;
      border-radius: 10px;
      white-space: nowrap;
    }
  }
`;
