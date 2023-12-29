import { PokemonTypes } from "@/components/PokemonTypeBadge/PokemonTypeBadge.types";
import styled, { css } from "styled-components";

type DetailsPokemonStatsProps = {
  pokemonType: PokemonTypes;
};

export const DetailsPokemonStatsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 40px 20px 20px 20px;
    height: 100%;
    width: 100%;
    background-color: ${theme.colors.grayscale.white};
    border-radius: 8px;
    gap: 16px;
  `}
`;

export const DetailsPokemonStatsTypesWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const DetailsPokemonStatsAboutTitle = styled.h1<DetailsPokemonStatsProps>`
  ${({ pokemonType, theme }) => css`
    font-size: 14px;
    font-weight: 700;
    color: ${pokemonType
      ? theme.colors.pokemonType[pokemonType]
      : theme.colors.grayscale.wireframe};
  `}
`;
