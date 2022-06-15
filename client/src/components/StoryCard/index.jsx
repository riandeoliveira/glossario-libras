import * as S from "./styles";

export const StoryCard = ({ image, title, exp }) => (
  <S.Card>
    <img src={image} alt="" />
    <h3>{title}</h3>
    <span>+ {exp} EXP</span>
  </S.Card>
);
