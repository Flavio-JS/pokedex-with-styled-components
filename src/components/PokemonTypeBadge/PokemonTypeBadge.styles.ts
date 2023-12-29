import styled, { css } from "styled-components";
import { PokemonTypeBadgeTypes } from "./PokemonTypeBadge.types";

export const PokemonTypeBadgeStylesWrapper = styled.div<PokemonTypeBadgeTypes>`
  ${({ pokemonType, theme }) => css`
    height: 20px;
    width: min-content;
    padding: 2px 8px;
    font-size: 10px;
    font-weight: 700;
    border-radius: 10px;
    background-color: ${pokemonType && pokemonType !== "type"
      ? `${theme.colors.pokemonType[pokemonType]}`
      : `${theme.colors.grayscale.medium}`};
  `}
`;
