import { PokemonTypeBadge } from "@/components/PokemonTypeBadge/PokemonTypeBadge";
import * as S from "./DetailsPokemonStats.styles";
import { DetailsPokemonStatsTypes } from "./DetailsPokemonStats.types";
import { DetailsPokemonStatsBar } from "./DetailsPokemonStatsBar/DetailsPokemonStatsBar";
import { DetailsPokemonPhysicalStats } from "./DetailsPokemonPhysicalStats/DetailsPokemonPhysicalStats";

export const DetailsPokemonStats = ({
  types,
  abilities,
  height,
  stats,
  weight,
}: DetailsPokemonStatsTypes) => {
  return (
    <S.DetailsPokemonStatsWrapper>
      <S.DetailsPokemonStatsTypesWrapper>
        {types.map((type) => (
          <PokemonTypeBadge key={type} pokemonType={type} />
        ))}
      </S.DetailsPokemonStatsTypesWrapper>
      <S.DetailsPokemonStatsAboutTitle pokemonType={types[0]}>
        About
      </S.DetailsPokemonStatsAboutTitle>
      <DetailsPokemonPhysicalStats
        abilities={abilities}
        height={height}
        weight={weight}
      />
      <DetailsPokemonStatsBar stats={stats} types={types} />
    </S.DetailsPokemonStatsWrapper>
  );
};
