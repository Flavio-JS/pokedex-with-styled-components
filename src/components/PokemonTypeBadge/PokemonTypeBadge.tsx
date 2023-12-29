import * as S from "./PokemonTypeBadge.styles";
import { PokemonTypeBadgeTypes } from "./PokemonTypeBadge.types";

export const PokemonTypeBadge = ({ pokemonType }: PokemonTypeBadgeTypes) => {
  return (
    <S.PokemonTypeBadgeStylesWrapper pokemonType={pokemonType}>
      {pokemonType}
    </S.PokemonTypeBadgeStylesWrapper>
  );
};
