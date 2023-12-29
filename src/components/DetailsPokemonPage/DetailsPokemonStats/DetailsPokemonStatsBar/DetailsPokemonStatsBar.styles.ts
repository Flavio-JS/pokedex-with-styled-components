import { PokemonTypes } from "@/components/PokemonTypeBadge/PokemonTypeBadge.types";
import styled, { css } from "styled-components";

type DetailsPokemonStatsProps = {
  pokemonType: PokemonTypes;
};

export const DetailsPokemonStatsBarTitle = styled.h1<DetailsPokemonStatsProps>`
  ${({ pokemonType, theme }) => css`
    font-size: 10px;
    font-weight: 700;
    color: ${pokemonType
      ? theme.colors.pokemonType[pokemonType]
      : theme.colors.grayscale.wireframe};
  `}
`;

export const DetailsPokemonStatsBarWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  max-width: 312px;
`;

export const DetailsPokemonStatsBarRowFull = styled.div<DetailsPokemonStatsProps>`
  ${({ pokemonType, theme }) => css`
    width: 100%;
    height: 4px;
    opacity: 0.2;
    background-color: ${pokemonType
      ? theme.colors.pokemonType[pokemonType]
      : theme.colors.grayscale.wireframe};
  `}
`;

export const DetailsPokemonStatsBarRow = styled.div<DetailsPokemonStatsProps>`
  ${({ pokemonType, theme }) => css`
    height: 4px;
    background-color: ${pokemonType
      ? theme.colors.pokemonType[pokemonType]
      : theme.colors.grayscale.wireframe};
  `}
`;
