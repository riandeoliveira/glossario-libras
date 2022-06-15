import * as S from "./styles";

// Caixa de título e subtítulo para início de páginas
export const TitleBox = ({ title, subtitle }) => (
  <S.Container>
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </S.Container>
);
