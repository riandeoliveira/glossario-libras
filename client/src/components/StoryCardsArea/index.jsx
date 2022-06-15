import * as S from "./styles";
import stories from "./stories.json";
import { StoryCard } from "../StoryCard";

export const StoryCardsArea = () => (
  <S.Container>
    {stories.map(({ title, xp_points, image_url }, i) => (
      <StoryCard title={title} exp={xp_points} image={image_url} key={i} />
    ))}
  </S.Container>
);
