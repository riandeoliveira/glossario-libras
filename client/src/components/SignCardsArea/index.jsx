import * as S from "./styles";
import signs from "./signs.json";
import { SignCard } from "../SignCard";

export const SignCardsArea = () => (
  <S.Container>
    <div>
      {signs.map(({ letter, image_url }) => (
        <SignCard letter={letter} image={image_url} />
      ))}
    </div>
  </S.Container>
);
