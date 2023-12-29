import { theme } from "@/styles/theme";
import styled, { css } from "styled-components";
import { PokemonTypeBadgeTypes } from "./PokemonTypeBadge.types";

export const PokemonTypeBadgeStylesWrapper = styled.div<PokemonTypeBadgeTypes>`
  ${({ pokemonType }) => css`
    height: 20px;
    width: min-content;
    padding: 2px 8px;
    font-size: 10px;
    font-weight: 700;
    border-radius: 10px;
    background-color: ${pokemonType
      ? `${theme.colors.pokemonType[pokemonType]}`
      : `${theme.colors.grayscale.medium}`};
  `}
`;
