import * as S from "./styles";
import stories from "./stories.json";
import { StoryCard } from "../StoryCard";
import { Card } from "../Card";

export const StoryCardsArea = () => (
  <S.Container>
    <div>
      {stories.map(({ name, xp_points, image_url }, i) => (
        <Card title={name} text={xp_points} image={image_url} key={i} />
      ))}
    </div>
  </S.Container>
);
