import * as S from "./styles";

export const Card = ({ image, title, text }) => {
  return (
    <S.Card>
      <img src={image} alt="" />
      <h3>{title}</h3>
      {text && <span>+ {text} EXP</span>}
    </S.Card>
  );
};
