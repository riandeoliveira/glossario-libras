import styled from "styled-components";

export const Header = styled.header`
  background-color: #212529;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  nav {
    display: flex;
    width: 1200px;
    height: inherit;

    ul {
      width: 100%;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: space-between;

      li {
        display: flex;

        a {
          font-size: 20px;
          display: flex;
          gap: 10px;
          align-items: center;
          text-decoration: none;
          color: white;
          transition: opacity 0.2s;

          svg {
            width: 24px;
            fill: white;
          }

          &:hover {
            opacity: 0.5;
          }
        }

        @media screen and (max-width: 720px) {
          a {
            padding: 20px;
          }

          span {
            display: none;
          }
        }
      }
    }
  }
`;
