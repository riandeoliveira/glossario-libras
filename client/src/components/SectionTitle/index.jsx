import * as S from "./styles";

export const SectionTitle = ({ title }) => (
  <S.Container>
    <div>
      <hr />
      <h2>{title}</h2>
      <hr />
    </div>
  </S.Container>
);
