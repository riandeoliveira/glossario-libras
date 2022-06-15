import * as S from "./styles";
import signs from "./signs.json";
import { SignCard } from "../SignCard";
import { Card } from "../Card";

export const SignCardsArea = () => (
  <S.Container>
    <div>
      {signs.map(({ letter, image_url }, i) => (
        <Card title={letter} image={image_url} key={i} />
      ))}
    </div>
  </S.Container>
);
